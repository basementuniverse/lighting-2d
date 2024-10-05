import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { Rectangle, ShadowOptions } from './types';
import { clampVec, pointInRectangle } from './utils';

export class Wall {
  private static readonly DEFAULT_SIZE = vec(100, 100);
  private static readonly DEFAULT_COLOUR = '#ccc';
  private static readonly DEFAULT_SHADOW_OPTIONS: ShadowOptions = {
    type: 'region',
    region: {
      position: vec(0, 0.4),
      size: vec(1, 0.6),
    },
  };
  private static readonly DEBUG_COLOUR = '#b05';
  private static readonly DEBUG_HOVER_COLOUR = '#d27';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(200, 200);

  public readonly type = 'wall';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = Wall.DEFAULT_SIZE;
  public colour: string = Wall.DEFAULT_COLOUR;
  public shadowOptions: ShadowOptions = Wall.DEFAULT_SHADOW_OPTIONS;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<Wall> = {}) {
    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`Wall ${this.id}`);
    this.folder.add(this, 'colour');
    this.folder
      .add(this.size, 'x', Wall.MIN_SIZE.x, Wall.MAX_SIZE.x)
      .name('width');
    this.folder
      .add(this.size, 'y', Wall.MIN_SIZE.y, Wall.MAX_SIZE.y)
      .name('height');
  }

  public get shadowRegion(): Rectangle | null {
    if (this.shadowOptions.type === 'region') {
      return {
        position: vec(
          this.position.x + this.shadowOptions.region.position.x * this.size.x,
          this.position.y + this.shadowOptions.region.position.y * this.size.y
        ),
        size: vec(
          this.shadowOptions.region.size.x * this.size.x,
          this.shadowOptions.region.size.y * this.size.y
        ),
      };
    }

    return null;
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
      shadowOptions: this.shadowOptions,
    };
  }

  public static deserialise(data: any): Wall {
    return new Wall(data);
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
          Wall.MIN_SIZE,
          Wall.MAX_SIZE
        );
      } else {
        this.position = vec.sub(InputManager.mousePosition, this.dragOffset);
      }
    }

    Debug.border(this.id, '', this.position, {
      showLabel: true,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? Wall.DEBUG_HOVER_COLOUR
          : Wall.DEBUG_COLOUR,
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
