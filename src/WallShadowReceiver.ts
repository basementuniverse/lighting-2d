import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import Game from './Game';
import { LightingScene } from './LightingScene';
import {
  clampVec,
  maxVec,
  minVec,
  pointInRectangle,
  quantizeVec,
} from './utils';

export class WallShadowReceiver {
  private static readonly DEFAULT_SIZE = vec(200, 200);
  private static readonly DEFAULT_COLOUR = '#ddd';
  private static readonly DEBUG_COLOUR = '#05b';
  private static readonly DEBUG_HOVER_COLOUR = '#38f';
  private static readonly MIN_SIZE = vec(20, 20);
  private static readonly MAX_SIZE = vec(600, 600);

  public readonly type = 'WallShadowReceiver';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  public size: vec = WallShadowReceiver.DEFAULT_SIZE;
  public colour: string = WallShadowReceiver.DEFAULT_COLOUR;
  public receiveLight: boolean = true;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public constructor(data: Partial<WallShadowReceiver> = {}) {
    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.folder = Game.gui.addFolder(`WallShadowReceiver ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder
      .add(
        this.size,
        'x',
        WallShadowReceiver.MIN_SIZE.x,
        WallShadowReceiver.MAX_SIZE.x
      )
      .name('width');
    this.folder
      .add(
        this.size,
        'y',
        WallShadowReceiver.MIN_SIZE.y,
        WallShadowReceiver.MAX_SIZE.y
      )
      .name('height');
    this.folder.add(this, 'colour');
    this.folder.add(this, 'receiveLight');
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      size: this.size,
      colour: this.colour,
      receiveLight: this.receiveLight,
    };
  }

  public static deserialise(data: any): WallShadowReceiver {
    return new WallShadowReceiver(data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public merge(b: WallShadowReceiver): WallShadowReceiver {
    const position = minVec(this.position, b.position);
    const br = maxVec(
      vec.add(this.position, this.size),
      vec.add(b.position, b.size)
    );

    return new WallShadowReceiver({
      position,
      size: vec.sub(br, position),
      colour: this.colour,
      receiveLight: this.receiveLight,
    });
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
        let newSize = vec.sub(InputManager.mousePosition, this.position);
        if (InputManager.keyDown('ShiftLeft')) {
          newSize = quantizeVec(newSize, LightingScene.GRID_SIZE);
        }
        this.size = clampVec(
          newSize,
          WallShadowReceiver.MIN_SIZE,
          WallShadowReceiver.MAX_SIZE
        );
      } else {
        let newPosition = vec.sub(InputManager.mousePosition, this.dragOffset);
        if (InputManager.keyDown('ShiftLeft')) {
          newPosition = quantizeVec(newPosition, LightingScene.GRID_SIZE);
        }
        this.position = newPosition;
      }
    }

    Debug.border(`WallShadowReceiver ${this.id}`, '', this.position, {
      level: 1,
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: vec(10, 30),
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? WallShadowReceiver.DEBUG_HOVER_COLOUR
          : WallShadowReceiver.DEBUG_COLOUR,
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
