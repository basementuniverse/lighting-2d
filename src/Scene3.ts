import Game from './Game';

/**
 * Scene 3 - test masking using global composite operations
 */
export class Scene3 {
  private maskCanvas: HTMLCanvasElement;
  private maskContext: CanvasRenderingContext2D;

  public initialise() {
    this.maskCanvas = document.createElement('canvas');
    this.maskCanvas.width = 600;
    this.maskCanvas.height = 600;
    this.maskContext = this.maskCanvas.getContext('2d') as CanvasRenderingContext2D;

    this.maskContext.fillStyle = 'black';
    this.maskContext.fillRect(200, 200, 200, 200);

    this.maskContext.globalCompositeOperation = 'destination-out';
    this.maskContext.fillStyle = 'black';
    this.maskContext.fillRect(300, 300, 200, 200);

    const gradient = this.maskContext.createRadialGradient(400, 400, 20, 400, 400, 200);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'black');

    this.maskContext.globalCompositeOperation = 'source-in';

    this.maskContext.fillStyle = gradient;
    this.maskContext.fillRect(200, 200, 400, 400);
  }

  public update(dt: number) {}

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    // context.save();

    // context.shadowOffsetX = 0;
    // context.shadowOffsetY = 0;
    // context.shadowColor = 'black';
    // context.shadowBlur = 20;
    context.drawImage(this.maskCanvas, 100, 100);

    // context.restore();

    context.restore();
  }
}
