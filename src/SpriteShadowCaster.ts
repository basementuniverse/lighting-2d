import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import ShadowCaster from './ShadowCaster';
import { clampVec, pointInRectangle, quantizeVec } from './utils';

export class SpriteShadowCaster implements ShadowCaster {
  private static readonly DEFAULT_SIZE = vec(64, 64);
  private static readonly DEFAULT_SHADOW_NAME = 'character-shadow';
  private static readonly DEFAULT_ANCHOR = vec(0.5, 0.9);
  private static readonly DEFAULT_OFFSET = vec(0.5, 0.9);
  private static readonly DEFAULT_MIN_SHADOW_LENGTH = 64;
  private static readonly DEFAULT_MAX_SHADOW_LENGTH = 64;
  private static readonly DEBUG_COLOUR = '#c33';
  private static readonly DEBUG_HOVER_COLOUR = '#f44';
  private static readonly MIN_SIZE = vec(16, 16);
  private static readonly MAX_SIZE = vec(256, 256);

  public readonly type = 'SpriteShadowCaster';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = SpriteShadowCaster.DEFAULT_SIZE;
  public shadowName: string = SpriteShadowCaster.DEFAULT_SHADOW_NAME;
  public anchor: vec = SpriteShadowCaster.DEFAULT_ANCHOR;
  public offset: vec = SpriteShadowCaster.DEFAULT_OFFSET;
  public minShadowLength: number = SpriteShadowCaster.DEFAULT_MIN_SHADOW_LENGTH;
  public maxShadowLength: number | null =
    SpriteShadowCaster.DEFAULT_MAX_SHADOW_LENGTH;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<SpriteShadowCaster> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`SpriteShadowCaster ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        SpriteShadowCaster.MIN_SIZE.x,
        SpriteShadowCaster.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        SpriteShadowCaster.MIN_SIZE.y,
        SpriteShadowCaster.MAX_SIZE.y
      )
      .name('height');
    this.folder.add(this, 'shadowName');
    this.folder.add(this.anchor, 'x').name('anchor x');
    this.folder.add(this.anchor, 'y').name('anchor y');
    this.folder.add(this.offset, 'x').name('offset x');
    this.folder.add(this.offset, 'y').name('offset y');
    this.folder.add(this, 'minShadowLength');
    this.folder.add(this, 'maxShadowLength');
  }

  public get shadow(): HTMLImageElement | null {
    return LightingScene.SPRITES[this.shadowName] ?? null;
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      shadowName: this.shadowName,
      anchor: this.anchor,
      offset: this.offset,
      minShadowLength: this.minShadowLength,
      maxShadowLength: this.maxShadowLength,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): SpriteShadowCaster {
    return new SpriteShadowCaster(scene, data);
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
        this.size = clampVec(
          newSize,
          SpriteShadowCaster.MIN_SIZE,
          SpriteShadowCaster.MAX_SIZE
        );
      } else {
        let newPosition = vec.sub(mouseWorldPosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position = newPosition;
      }
    }

    Debug.border(`SpriteShadowCaster ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? SpriteShadowCaster.DEBUG_HOVER_COLOUR
          : SpriteShadowCaster.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }
}
