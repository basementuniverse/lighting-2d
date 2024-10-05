import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { clampVec, pointInRect } from './utils';
import InputManager from '@basementuniverse/input-manager';
import Debug from '@basementuniverse/debug';

export class Wall {
  private static readonly DEFAULT_SIZE = vec(100, 100);
  private static readonly DEFAULT_COLOUR = '#777';
  private static readonly DEFAULT_SHADOW_LENGTH = 100;
  private static readonly DEFAULT_SHADOW_REGION_OFFSET = vec(0, 50);
  private static readonly DEFAULT_SHADOW_REGION_SIZE = vec(100, 50);
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
  public shadowLength: number = Wall.DEFAULT_SHADOW_LENGTH;
  public shadowRegion: {
    offset: vec;
    size: vec;
  } = {
    offset: Wall.DEFAULT_SHADOW_REGION_OFFSET,
    size: Wall.DEFAULT_SHADOW_REGION_SIZE,
  };

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<Wall> = {}) {
    Object.assign(
      this,
      data,
      {
        id: data.id ?? uuid().split('-')[0],
      }
    );

    this.folder = Game.gui.addFolder(`Wall ${this.id}`);
    this.folder.add(this, 'colour');
    this.folder.add(this, 'shadowLength', 0, 100);
    this.folder.add(
      this.size,
      'x',
      Wall.MIN_SIZE.x,
      Wall.MAX_SIZE.x
    ).name('width');
    this.folder.add(
      this.size,
      'y',
      Wall.MIN_SIZE.y,
      Wall.MAX_SIZE.y
    ).name('height');
    this.folder.add(this.shadowRegion.offset, 'x').name('shadowRegion x');
    this.folder.add(this.shadowRegion.offset, 'y').name('shadowRegion y');
    this.folder.add(this.shadowRegion.size, 'x').name('shadowRegion width');
    this.folder.add(this.shadowRegion.size, 'y').name('shadowRegion height');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
      shadowLength: this.shadowLength,
      shadowRegion: this.shadowRegion,
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
    this.hovered = pointInRect(
      InputManager.mousePosition,
      this.position,
      vec.add(this.position, this.size)
    );

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

    Debug.border(`${this.id}_border`, '', this.position, {
      showLabel: false,
      showValue: false,
      size: this.size,
      borderColour: (this.hovered || this.dragging)
        ? Wall.DEBUG_HOVER_COLOUR
        : Wall.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
    Debug.border(
      `${this.id}_shadowRegion_border`,
      '',
      vec.add(this.position, this.shadowRegion.offset),
      {
        showLabel: false,
        showValue: false,
        size: this.shadowRegion.size,
        borderColour: 'black',
        borderStyle: 'dotted',
      }
    );
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
