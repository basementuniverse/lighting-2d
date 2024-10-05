import Game from './Game';

/**
 * Scene 2 - test masking non-0 rule with CW/CCW winding order shapes
 */
export class Scene2 {
  public initialise() {}

  public update(dt: number) {}

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    context.beginPath();
    context.moveTo(200, 200);
    context.lineTo(600, 200);
    context.lineTo(600, 500);
    context.lineTo(200, 500);
    context.lineTo(200, 200);

    context.moveTo(300, 100);
    context.lineTo(400, 100);
    context.lineTo(400, 300);
    context.lineTo(300, 300);
    context.lineTo(300, 100);

    context.moveTo(100, 250);
    context.lineTo(100, 350);
    context.lineTo(500, 350);
    context.lineTo(500, 250);
    context.lineTo(100, 250);
    context.closePath();

    context.fillStyle = 'black';
    context.fill();
  }
}
