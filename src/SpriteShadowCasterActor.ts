import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Actor, SpriteShadowCaster } from './contracts';
import Game from './Game';
import { LightingScene } from './scenes/LightingScene';
import { clampVec, pointInRectangle, quantizeVec } from './utilities';

export class SpriteShadowCasterActor implements Actor, SpriteShadowCaster {
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
  public size: vec = SpriteShadowCasterActor.DEFAULT_SIZE;
  public shadowName: string = SpriteShadowCasterActor.DEFAULT_SHADOW_NAME;
  public anchor: vec = SpriteShadowCasterActor.DEFAULT_ANCHOR;
  public offset: vec = SpriteShadowCasterActor.DEFAULT_OFFSET;
  public minShadowLength: number =
    SpriteShadowCasterActor.DEFAULT_MIN_SHADOW_LENGTH;
  public maxShadowLength: number | null =
    SpriteShadowCasterActor.DEFAULT_MAX_SHADOW_LENGTH;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<SpriteShadowCasterActor> = {}
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
        SpriteShadowCasterActor.MIN_SIZE.x,
        SpriteShadowCasterActor.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        SpriteShadowCasterActor.MIN_SIZE.y,
        SpriteShadowCasterActor.MAX_SIZE.y
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
    return ContentManager.get<HTMLImageElement>(this.shadowName) ?? null;
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
  ): SpriteShadowCasterActor {
    return new SpriteShadowCasterActor(scene, data);
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
          SpriteShadowCasterActor.MIN_SIZE,
          SpriteShadowCasterActor.MAX_SIZE
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
          ? SpriteShadowCasterActor.DEBUG_HOVER_COLOUR
          : SpriteShadowCasterActor.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {}
}
