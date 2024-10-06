import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import ShadowCaster from './ShadowCaster';
import {
  clampVec,
  maxVec,
  minVec,
  pointInRectangle,
  quantizeVec,
} from './utils';

export class RegionShadowCaster implements ShadowCaster {
  private static readonly DEFAULT_SIZE = vec(100, 100);
  private static readonly DEBUG_COLOUR = '#b05';
  private static readonly DEBUG_HOVER_COLOUR = '#d27';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(200, 200);

  public readonly type = 'RegionShadowCaster';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = RegionShadowCaster.DEFAULT_SIZE;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(
    scene: LightingScene,
    data: Partial<RegionShadowCaster> = {}
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
        RegionShadowCaster.MIN_SIZE.x,
        RegionShadowCaster.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        RegionShadowCaster.MIN_SIZE.y,
        RegionShadowCaster.MAX_SIZE.y
      )
      .name('height');
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
  ): RegionShadowCaster {
    return new RegionShadowCaster(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public merge(
    scene: LightingScene,
    b: RegionShadowCaster
  ): RegionShadowCaster {
    const position = minVec(this.position, b.position);
    const br = maxVec(
      vec.add(this.position, this.size),
      vec.add(b.position, b.size)
    );

    return new RegionShadowCaster(scene, {
      position,
      size: vec.sub(br, position),
    });
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
          RegionShadowCaster.MIN_SIZE,
          RegionShadowCaster.MAX_SIZE
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
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: vec(10, 50),
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? RegionShadowCaster.DEBUG_HOVER_COLOUR
          : RegionShadowCaster.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }
}
