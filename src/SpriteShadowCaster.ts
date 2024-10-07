import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import ShadowCaster from './ShadowCaster';
import { AnchorPosition } from './types';
import { clampVec, pointInRectangle, quantizeVec } from './utils';

export class SpriteShadowCaster implements ShadowCaster {
  private static readonly DEFAULT_SIZE = vec(100, 100);
  private static readonly DEBUG_COLOUR = '#b05';
  private static readonly DEBUG_HOVER_COLOUR = '#d27';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(200, 200);

  public readonly type = 'SpriteShadowCaster';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = SpriteShadowCaster.DEFAULT_SIZE;
  public spriteName: string = 'test-shadow';
  public tempSpriteName: string = 'test-sprite';
  public anchor: AnchorPosition = AnchorPosition.Centre;

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
    this.folder.add(this, 'spriteName');
    this.folder.add(this, 'tempSpriteName');
    this.folder.add(this, 'anchor', Object.values(AnchorPosition));
  }

  public get sprite(): HTMLImageElement | null {
    return LightingScene.SPRITES[this.spriteName] ?? null;
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      spriteName: this.spriteName,
      anchor: this.anchor,
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
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
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
