import { vec } from '@basementuniverse/vec';
import { lineInRect } from './utils';
import Debug from '@basementuniverse/debug';
import Game from './Game';
import InputManager from '@basementuniverse/input-manager';

/**
 * Scene 1 - test lineInRect
 */
export class Scene1 {
  private a: vec | null = null;
  private b: vec | null = null;

  public initialise() {}

  public update(dt: number) {
    if (InputManager.mousePressed()) {
      if (InputManager.keyDown('ControlLeft')) {
        this.b = vec.cpy(InputManager.mousePosition);
      } else {
        this.a = vec.cpy(InputManager.mousePosition);
      }
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    const rect = {
      p: vec(200, 200),
      s: vec(300, 200),
    };

    let c: vec | null = null;
    if (this.a && this.b) {
      c = lineInRect(this.a, this.b, rect.p, vec.add(rect.p, rect.s));
    }

    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.strokeRect(rect.p.x, rect.p.y, rect.s.x, rect.s.y);

    if (this.a) {
      Debug.marker('start', '', this.a);
    }

    if (this.b) {
      Debug.marker('end', '', this.b);
    }

    if (this.a && this.b) {
      context.beginPath();
      context.moveTo(this.a.x, this.a.y);
      context.lineTo(this.b.x, this.b.y);
      context.strokeStyle = 'red';
      context.stroke();
    }

    if (c !== null) {
      Debug.marker('c', '', c);
    }
  }
}
