import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import { clampVec, pointInRectangle, quantizeVec } from './utils';

export class GroundShadowReceiver {
  private static readonly DEFAULT_SIZE = vec(256, 256);
  private static readonly DEFAULT_COLOUR = '#ddd';
  private static readonly DEFAULT_SPRITE_NAME = 'ground';
  private static readonly DEBUG_COLOUR = '#36c';
  private static readonly DEBUG_HOVER_COLOUR = '#58e';
  private static readonly MIN_SIZE = vec(16, 16);
  private static readonly MAX_SIZE = vec(1024, 1024);

  public readonly type = 'GroundShadowReceiver';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = GroundShadowReceiver.DEFAULT_SIZE;
  public colour: string = GroundShadowReceiver.DEFAULT_COLOUR;
  public spriteName: string = GroundShadowReceiver.DEFAULT_SPRITE_NAME;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<GroundShadowReceiver> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`GroundShadowReceiver ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        GroundShadowReceiver.MIN_SIZE.x,
        GroundShadowReceiver.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        GroundShadowReceiver.MIN_SIZE.y,
        GroundShadowReceiver.MAX_SIZE.y
      )
      .name('height');
    this.folder.add(this, 'colour');
    this.folder.add(this, 'spriteName');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
      spriteName: this.spriteName,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): GroundShadowReceiver {
    return new GroundShadowReceiver(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public update(dt: number) {
    const mouseWorldPosition = this.scene.camera.positionToWorld(
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
        this.size = clampVec(
          newSize,
          GroundShadowReceiver.MIN_SIZE,
          GroundShadowReceiver.MAX_SIZE
        );
      } else {
        let newPosition = vec.sub(mouseWorldPosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position = newPosition;
      }
    }

    Debug.border(`GroundShadowReceiver ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? GroundShadowReceiver.DEBUG_HOVER_COLOUR
          : GroundShadowReceiver.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.fillStyle = this.colour;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );

    const image = LightingScene.SPRITES[this.spriteName];
    if (image) {
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
    }

    context.restore();
  }

  public drawMask(context: CanvasRenderingContext2D) {
    context.save();

    context.fillStyle = 'black';
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );

    context.restore();
  }
}
