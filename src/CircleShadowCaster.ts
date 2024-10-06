import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import ShadowCaster from './ShadowCaster';
import { clampVec, pointInRectangle } from './utils';

export class CircleShadowCaster implements ShadowCaster {
  private static readonly DEFAULT_SIZE = vec(100, 100);
  private static readonly DEFAULT_COLOUR = '#ccc';
  private static readonly DEBUG_COLOUR = '#b05';
  private static readonly DEBUG_HOVER_COLOUR = '#d27';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(200, 200);

  public readonly type = 'CircleShadowCaster';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = CircleShadowCaster.DEFAULT_SIZE;
  public colour: string = CircleShadowCaster.DEFAULT_COLOUR;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<CircleShadowCaster> = {}) {
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
    this.folder.add(this, 'colour');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
    };
  }

  public static deserialise(data: any): CircleShadowCaster {
    return new CircleShadowCaster(data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public update(dt: number) {
    this.hovered = pointInRectangle(InputManager.mousePosition, {
      position: this.position,
      size: this.size,
    });

    if (InputManager.mouseDown() && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec.sub(InputManager.mousePosition, this.position);
    }

    if (!InputManager.mouseDown()) {
      this.dragging = false;
      this.dragOffset = null;
    }

    if (this.selected && this.dragging && this.dragOffset) {
      if (InputManager.keyDown('ControlLeft')) {
        this.size = clampVec(
          vec.sub(InputManager.mousePosition, this.position),
          CircleShadowCaster.MIN_SIZE,
          CircleShadowCaster.MAX_SIZE
        );
      } else {
        this.position = vec.sub(InputManager.mousePosition, this.dragOffset);
      }
    }

    Debug.border(`CircleShadowCaster ${this.id}`, '', this.position, {
      showLabel: true,
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
