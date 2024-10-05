import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { clampVec, pointInRect } from './utils';
import InputManager from '@basementuniverse/input-manager';
import Debug from '@basementuniverse/debug';

export class Ground {
  private static readonly DEFAULT_SIZE = vec(200, 200);
  private static readonly DEFAULT_COLOUR = '#aaa';
  private static readonly DEBUG_COLOUR = '#05b';
  private static readonly DEBUG_HOVER_COLOUR = '#38f';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(600, 600);

  public readonly type = 'ground';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = Ground.DEFAULT_SIZE;
  public colour: string = Ground.DEFAULT_COLOUR;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<Ground> = {}) {
    Object.assign(
      this,
      data,
      {
        id: data.id ?? uuid().split('-')[0],
      }
    );

    this.folder = Game.gui.addFolder(`Ground ${this.id}`);
    this.folder.add(this, 'colour');
    this.folder.add(
      this.size,
      'x',
      Ground.MIN_SIZE.x,
      Ground.MAX_SIZE.x
    ).name('width');
    this.folder.add(
      this.size,
      'y',
      Ground.MIN_SIZE.y,
      Ground.MAX_SIZE.y
    ).name('height');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour
    };
  }

  public static deserialise(data: any): Ground {
    return new Ground(data);
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
          Ground.MIN_SIZE,
          Ground.MAX_SIZE
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
        ? Ground.DEBUG_HOVER_COLOUR
        : Ground.DEBUG_COLOUR,
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
