import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { clampVec, pointInRectangle } from './utils';

export class GroundShadowReceiver {
  private static readonly DEFAULT_SIZE = vec(200, 200);
  private static readonly DEFAULT_COLOUR = '#ddd';
  private static readonly DEBUG_COLOUR = '#05b';
  private static readonly DEBUG_HOVER_COLOUR = '#38f';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(600, 600);

  public readonly type = 'GroundShadowReceiver';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = GroundShadowReceiver.DEFAULT_SIZE;
  public colour: string = GroundShadowReceiver.DEFAULT_COLOUR;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<GroundShadowReceiver> = {}) {
    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`GroundShadowReceiver ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        GroundShadowReceiver.MIN_SIZE.x,
        GroundShadowReceiver.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        GroundShadowReceiver.MIN_SIZE.y,
        GroundShadowReceiver.MAX_SIZE.y
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

  public static deserialise(data: any): GroundShadowReceiver {
    return new GroundShadowReceiver(data);
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
          GroundShadowReceiver.MIN_SIZE,
          GroundShadowReceiver.MAX_SIZE
        );
      } else {
        this.position = vec.sub(InputManager.mousePosition, this.dragOffset);
      }
    }

    Debug.border(`GroundShadowReceiver ${this.id}`, '', this.position, {
      showLabel: false,
      showValue: false,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? GroundShadowReceiver.DEBUG_HOVER_COLOUR
          : GroundShadowReceiver.DEBUG_COLOUR,
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
