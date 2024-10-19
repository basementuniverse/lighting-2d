import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Actor, CircleShadowCaster } from './contracts';
import Game from './Game';
import { LightingScene } from './scenes/LightingScene';
import { clampVec, pointInRectangle, quantizeVec } from './utilities';

export class CircleShadowCasterActor implements Actor, CircleShadowCaster {
  private static readonly DEFAULT_SIZE = vec(64, 64);
  private static readonly DEFAULT_ANCHOR = vec(0.5, 0.9);
  private static readonly DEFAULT_MIN_SHADOW_DISTANCE = 5;
  private static readonly DEFAULT_MAX_SHADOW_DISTANCE = 20;
  private static readonly DEFAULT_ALPHA = 1;
  private static readonly DEBUG_COLOUR = '#c33';
  private static readonly DEBUG_HOVER_COLOUR = '#f44';
  private static readonly MIN_SIZE = vec(16, 16);
  private static readonly MAX_SIZE = vec(256, 256);

  public readonly type = 'CircleShadowCaster';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = CircleShadowCasterActor.DEFAULT_SIZE;
  public anchor: vec = CircleShadowCasterActor.DEFAULT_ANCHOR;
  public minShadowDistance: number =
    CircleShadowCasterActor.DEFAULT_MIN_SHADOW_DISTANCE;
  public maxShadowDistance: number | null =
    CircleShadowCasterActor.DEFAULT_MAX_SHADOW_DISTANCE;
  public alpha: number = CircleShadowCasterActor.DEFAULT_ALPHA;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<CircleShadowCasterActor> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`CircleShadowCaster ${this.id}`);
    this.folder.add(this.position, 'x').listen();
    this.folder.add(this.position, 'y').listen();
    this.folder
      .add(
        this.size,
        'x',
        CircleShadowCasterActor.MIN_SIZE.x,
        CircleShadowCasterActor.MAX_SIZE.x
      )
      .name('width')
      .listen();
    this.folder
      .add(
        this.size,
        'y',
        CircleShadowCasterActor.MIN_SIZE.y,
        CircleShadowCasterActor.MAX_SIZE.y
      )
      .name('height')
      .listen();
    this.folder.add(this.anchor, 'x').name('anchor x');
    this.folder.add(this.anchor, 'y').name('anchor y');
    this.folder.add(this, 'minShadowDistance');
    this.folder.add(this, 'maxShadowDistance');
    this.folder.add(this, 'alpha', 0, 1, 0.01);
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      anchor: this.anchor,
      minShadowDistance: this.minShadowDistance,
      maxShadowDistance: this.maxShadowDistance,
      alpha: this.alpha,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): CircleShadowCasterActor {
    return new CircleShadowCasterActor(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
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
          CircleShadowCasterActor.MIN_SIZE,
          CircleShadowCasterActor.MAX_SIZE
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

    Debug.border(`CircleShadowCaster ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? CircleShadowCasterActor.DEBUG_HOVER_COLOUR
          : CircleShadowCasterActor.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {}
}
