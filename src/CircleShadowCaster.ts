import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import ShadowCaster from './ShadowCaster';
import { clampVec, pointInRectangle, quantizeVec } from './utils';

export class CircleShadowCaster implements ShadowCaster {
  private static readonly DEFAULT_SIZE = vec(64, 64);
  private static readonly DEFAULT_ANCHOR = vec(0.5, 0.9);
  private static readonly DEFAULT_MIN_DISTANCE = 5;
  private static readonly DEFAULT_MAX_DISTANCE = 20;
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
  public size: vec = CircleShadowCaster.DEFAULT_SIZE;
  public anchor: vec = CircleShadowCaster.DEFAULT_ANCHOR;
  public minDistance: number = CircleShadowCaster.DEFAULT_MIN_DISTANCE;
  public maxDistance: number | null = CircleShadowCaster.DEFAULT_MAX_DISTANCE;
  public alpha: number = CircleShadowCaster.DEFAULT_ALPHA;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<CircleShadowCaster> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`CircleShadowCaster ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        CircleShadowCaster.MIN_SIZE.x,
        CircleShadowCaster.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        CircleShadowCaster.MIN_SIZE.y,
        CircleShadowCaster.MAX_SIZE.y
      )
      .name('height');
    this.folder.add(this.anchor, 'x').name('anchor x');
    this.folder.add(this.anchor, 'y').name('anchor y');
    this.folder.add(this, 'minDistance');
    this.folder.add(this, 'maxDistance');
    this.folder.add(this, 'alpha');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      anchor: this.anchor,
      minDistance: this.minDistance,
      maxDistance: this.maxDistance,
      alpha: this.alpha,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): CircleShadowCaster {
    return new CircleShadowCaster(scene, data);
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
          CircleShadowCaster.MIN_SIZE,
          CircleShadowCaster.MAX_SIZE
        );
      } else {
        let newPosition = vec.sub(mouseWorldPosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position = newPosition;
      }
    }

    Debug.border(`CircleShadowCaster ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? CircleShadowCaster.DEBUG_HOVER_COLOUR
          : CircleShadowCaster.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }
}
