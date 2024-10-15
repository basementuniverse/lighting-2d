import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Mergeable, RegionShadowCaster } from './contracts';
import Game from './Game';
import { LightingScene } from './LightingScene';
import {
  clampVec,
  maxVec,
  minVec,
  pointInRectangle,
  quantizeVec,
} from './utilities';

export class RegionShadowCasterActor
  implements RegionShadowCaster, Mergeable<RegionShadowCasterActor>
{
  private static readonly DEFAULT_SIZE = vec(64, 64);
  private static readonly DEFAULT_INCLUDE_REGION_SHADOW = false;
  private static readonly DEBUG_COLOUR = '#c33';
  private static readonly DEBUG_HOVER_COLOUR = '#f44';
  private static readonly MIN_SIZE = vec(16, 16);
  private static readonly MAX_SIZE = vec(256, 256);

  public readonly type = 'RegionShadowCaster';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = RegionShadowCasterActor.DEFAULT_SIZE;
  public includeRegionShadow: boolean =
    RegionShadowCasterActor.DEFAULT_INCLUDE_REGION_SHADOW;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<RegionShadowCasterActor> = {}
  ) {
    this.scene = scene;

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`RegionShadowCaster ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        RegionShadowCasterActor.MIN_SIZE.x,
        RegionShadowCasterActor.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        RegionShadowCasterActor.MIN_SIZE.y,
        RegionShadowCasterActor.MAX_SIZE.y
      )
      .name('height');
    this.folder.add(this, 'includeRegionShadow');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
    };
  }

  public static deserialise(
    scene: LightingScene,
    data: any
  ): RegionShadowCasterActor {
    return new RegionShadowCasterActor(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public merge(
    other: RegionShadowCasterActor,
    scene: LightingScene
  ): RegionShadowCasterActor {
    const position = minVec(this.position, other.position);
    const br = maxVec(
      vec.add(this.position, this.size),
      vec.add(other.position, other.size)
    );

    return new RegionShadowCasterActor(scene, {
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
        this.size = clampVec(
          newSize,
          RegionShadowCasterActor.MIN_SIZE,
          RegionShadowCasterActor.MAX_SIZE
        );
      } else {
        let newPosition = vec.sub(mouseWorldPosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position = newPosition;
      }
    }

    Debug.border(`RegionShadowCaster ${this.id}`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: vec(10, 50),
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? RegionShadowCasterActor.DEBUG_HOVER_COLOUR
          : RegionShadowCasterActor.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }
}
