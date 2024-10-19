import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import {
  Actor,
  Mergeable,
  NormalMappable,
  SpecularMappable,
  WallShadowReceiver,
} from './contracts';
import Game from './Game';
import { LightingSystem } from './LightingSystem';
import { LightingScene } from './scenes/LightingScene';
import { WallShadowLayer } from './types';
import {
  clampVec,
  maxVec,
  minVec,
  pointInRectangle,
  quantizeVec,
} from './utilities';

export class WallShadowReceiverActor
  implements
    Actor,
    WallShadowReceiver,
    NormalMappable,
    SpecularMappable,
    Mergeable<WallShadowReceiverActor>
{
  private static readonly DEFAULT_SIZE = vec(64, 64);
  private static readonly DEFAULT_COLOUR = '#ddd';
  private static readonly DEFAULT_RECEIVE_LIGHT = true;
  private static readonly DEFAULT_SPRITE_NAME = 'wall1';
  private static readonly DEFAULT_MASK_NAME = 'wall1-mask';
  private static readonly DEFAULT_NORMAL_MAP_NAME = 'wall1-normal';
  private static readonly DEFAULT_SPECULAR_MAP_NAME = '';
  private static readonly DEFAULT_SPRITE_REPEAT = false;
  private static readonly DEFAULT_LAYER = WallShadowLayer.One;
  private static readonly DEBUG_COLOUR = '#f83';
  private static readonly DEBUG_HOVER_COLOUR = '#fb4';
  private static readonly MIN_SIZE = vec(16, 16);
  private static readonly MAX_SIZE = vec(256, 256);

  public readonly type = 'WallShadowReceiver';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = WallShadowReceiverActor.DEFAULT_SIZE;
  public colour: string = WallShadowReceiverActor.DEFAULT_COLOUR;
  public receiveLight: boolean = WallShadowReceiverActor.DEFAULT_RECEIVE_LIGHT;
  public spriteName: string = WallShadowReceiverActor.DEFAULT_SPRITE_NAME;
  public maskName: string = WallShadowReceiverActor.DEFAULT_MASK_NAME;
  public normalMapName: string =
    WallShadowReceiverActor.DEFAULT_NORMAL_MAP_NAME;
  public specularMapName: string =
    WallShadowReceiverActor.DEFAULT_SPECULAR_MAP_NAME;
  public spriteRepeat: boolean = WallShadowReceiverActor.DEFAULT_SPRITE_REPEAT;
  public layer: WallShadowLayer = WallShadowReceiverActor.DEFAULT_LAYER;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<WallShadowReceiverActor> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`WallShadowReceiver ${this.id}`);
    this.folder.add(this.position, 'x').listen();
    this.folder.add(this.position, 'y').listen();
    this.folder
      .add(
        this.size,
        'x',
        WallShadowReceiverActor.MIN_SIZE.x,
        WallShadowReceiverActor.MAX_SIZE.x
      )
      .name('width')
      .listen();
    this.folder
      .add(
        this.size,
        'y',
        WallShadowReceiverActor.MIN_SIZE.y,
        WallShadowReceiverActor.MAX_SIZE.y
      )
      .name('height')
      .listen();
    this.folder.add(this, 'colour');
    this.folder.add(this, 'receiveLight');
    this.folder.add(this, 'spriteName');
    this.folder.add(this, 'maskName');
    this.folder.add(this, 'normalMapName');
    this.folder.add(this, 'specularMapName');
    this.folder.add(this, 'spriteRepeat');
    this.folder.add(this, 'layer', Object.values(WallShadowLayer));
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
      receiveLight: this.receiveLight,
      spriteName: this.spriteName,
      maskName: this.maskName,
      normalMapName: this.normalMapName,
      specularMapName: this.specularMapName,
      spriteRepeat: this.spriteRepeat,
      layer: this.layer,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): WallShadowReceiverActor {
    return new WallShadowReceiverActor(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public merge(
    other: WallShadowReceiverActor,
    scene: LightingScene
  ): WallShadowReceiverActor {
    const position = minVec(this.position, other.position);
    const br = maxVec(
      vec.add(this.position, this.size),
      vec.add(other.position, other.size)
    );

    return new WallShadowReceiverActor(scene, {
      ...exclude(this.serialise(), 'id'),
      position,
      size: vec.sub(br, position),
    });
  }

  public update(dt: number) {
    const mouseWorldPosition = this.scene.camera.screenToWorld(
      InputManager.mousePosition
    );

    this.hovered = pointInRectangle(mouseWorldPosition, {
      position: this.position,
      size: this.size,
    });

    if (InputManager.mouseDown() && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec.sub(mouseWorldPosition, this.position);
    }

    if (!InputManager.mouseDown()) {
      this.dragging = false;
      this.dragOffset = null;
    }

    if (this.selected && this.dragging && this.dragOffset) {
      if (InputManager.keyDown('ControlLeft')) {
        let newSize = vec.sub(mouseWorldPosition, this.position);
        if (InputManager.keyDown('ShiftLeft')) {
          newSize = quantizeVec(newSize, LightingScene.GRID_SIZE);
        }
        newSize = clampVec(
          newSize,
          WallShadowReceiverActor.MIN_SIZE,
          WallShadowReceiverActor.MAX_SIZE
        );
        this.size.x = newSize.x;
        this.size.y = newSize.y;
      } else {
        let newPosition = vec.sub(mouseWorldPosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
      }
    }

    Debug.border(`WallShadowReceiver ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: vec(10, 30),
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? WallShadowReceiverActor.DEBUG_HOVER_COLOUR
          : WallShadowReceiverActor.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    if (this.colour) {
      context.fillStyle = this.colour;
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }

    const image = ContentManager.get<HTMLImageElement>(this.spriteName);
    if (image) {
      if (this.spriteRepeat) {
        const pattern = context.createPattern(image, 'repeat');
        if (pattern) {
          context.fillStyle = pattern;
          context.beginPath();
          context.rect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
          );
          context.fill();
        }
      } else {
        context.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        );
      }
    }

    context.restore();
  }

  public drawMask(context: CanvasRenderingContext2D) {
    context.save();

    if (this.colour) {
      context.fillStyle = 'black';
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }

    const image = ContentManager.get<HTMLImageElement>(this.maskName);
    if (image) {
      if (this.spriteRepeat) {
        const pattern = context.createPattern(image, 'repeat');
        if (pattern) {
          context.fillStyle = pattern;
          context.beginPath();
          context.rect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
          );
          context.fill();
        }
      } else {
        context.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        );
      }
    }

    context.restore();
  }

  public drawNormalMap(context: CanvasRenderingContext2D) {
    context.save();

    const image = ContentManager.get<HTMLImageElement>(this.normalMapName);
    if (image) {
      if (this.spriteRepeat) {
        const pattern = context.createPattern(image, 'repeat');
        if (pattern) {
          context.fillStyle = pattern;
          context.beginPath();
          context.rect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
          );
          context.fill();
        }
      } else {
        context.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        );
      }
    } else {
      context.fillStyle = LightingSystem.NORMAL_MAP_DEFAULT_COLOUR;
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }

    context.restore();
  }

  public drawSpecularMap(context: CanvasRenderingContext2D) {
    context.save();

    const image = ContentManager.get<HTMLImageElement>(this.specularMapName);
    if (image) {
      if (this.spriteRepeat) {
        const pattern = context.createPattern(image, 'repeat');
        if (pattern) {
          context.fillStyle = pattern;
          context.beginPath();
          context.rect(
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
          );
          context.fill();
        }
      } else {
        context.drawImage(
          image,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        );
      }
    } else {
      context.fillStyle = LightingSystem.SPECULAR_MAP_DEFAULT_COLOUR;
      context.fillRect(
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y
      );
    }

    context.restore();
  }
}
