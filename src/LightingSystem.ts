import Game from './Game';
import { Ground } from './Ground';
import { Light } from './Light';
import { Wall } from './Wall';

export class LightingSystem {
  private static readonly WALL_LIGHTING_Y_OFFSET = -30;

  public ambientLightColour = 'black';
  public lights: Light[] = [];

  public groundMaskCanvas: HTMLCanvasElement;
  private groundMaskContext: CanvasRenderingContext2D;

  public wallMaskCanvas: HTMLCanvasElement;
  private wallMaskContext: CanvasRenderingContext2D;

  public lightMapCanvas: HTMLCanvasElement;
  private lightMapContext: CanvasRenderingContext2D;

  public wallMaskedLightMapCanvas: HTMLCanvasElement;
  private wallMaskedLightMapContext: CanvasRenderingContext2D;

  public groundMaskedLightMapCanvas: HTMLCanvasElement;
  private groundMaskedLightMapContext: CanvasRenderingContext2D;

  public initialise() {
    this.groundMaskCanvas = document.createElement('canvas');
    this.groundMaskCanvas.width = Game.screen.x;
    this.groundMaskCanvas.height = Game.screen.y;
    this.groundMaskContext = this.groundMaskCanvas.getContext('2d')!;

    this.wallMaskCanvas = document.createElement('canvas');
    this.wallMaskCanvas.width = Game.screen.x;
    this.wallMaskCanvas.height = Game.screen.y;
    this.wallMaskContext = this.wallMaskCanvas.getContext('2d')!;

    this.lightMapCanvas = document.createElement('canvas');
    this.lightMapCanvas.width = Game.screen.x;
    this.lightMapCanvas.height = (
      Game.screen.y -
      LightingSystem.WALL_LIGHTING_Y_OFFSET
    );
    this.lightMapContext = this.lightMapCanvas.getContext('2d')!;

    this.wallMaskedLightMapCanvas = document.createElement('canvas');
    this.wallMaskedLightMapCanvas.width = Game.screen.x;
    this.wallMaskedLightMapCanvas.height = Game.screen.y;
    this.wallMaskedLightMapContext =
      this.wallMaskedLightMapCanvas.getContext('2d')!;

    this.groundMaskedLightMapCanvas = document.createElement('canvas');
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext =
      this.groundMaskedLightMapCanvas.getContext('2d')!;
  }

  public update(dt: number) {
    this.lights.forEach(light => light.update(dt));
  }

  public prepare(
    grounds: Ground[],
    walls: Wall[]
  ) {
    this.lights.forEach(light => light.draw());

    // Prepare lightmap
    this.lightMapCanvas.width = Game.screen.x;
    this.lightMapCanvas.height = (
      Game.screen.y -
      LightingSystem.WALL_LIGHTING_Y_OFFSET
    );
    this.lightMapContext.save();

    // Ambient light
    this.lightMapContext.fillStyle = this.ambientLightColour;
    this.lightMapContext.fillRect(0, 0, Game.screen.x, Game.screen.y);

    // Draw lights
    this.lightMapContext.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.lightMapContext.drawImage(
        light.lightCanvas,
        light.position.x - light.radius,
        light.position.y - light.radius
      );
    });

    this.lightMapContext.restore();

    // Prepare ground mask
    this.groundMaskCanvas.width = Game.screen.x;
    this.groundMaskCanvas.height = Game.screen.y;
    this.groundMaskContext.save();

    grounds.forEach(ground => {
      ground.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.globalCompositeOperation = 'destination-out';

    walls.forEach(wall => {
      wall.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.restore();

    // Prepare wall mask
    this.wallMaskCanvas.width = Game.screen.x;
    this.wallMaskCanvas.height = Game.screen.y;
    this.wallMaskContext.save();

    walls.forEach(wall => {
      wall.drawMask(this.wallMaskContext);
    });

    this.wallMaskContext.restore();

    // Draw lightmap onto ground-masked lightmap
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext.save();

    this.groundMaskedLightMapContext.drawImage(this.lightMapCanvas, 0, 0);
    this.groundMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.groundMaskedLightMapContext.drawImage(this.groundMaskCanvas, 0, 0);

    this.groundMaskedLightMapContext.restore();

    // Draw lightmap onto wall-masked lightmap
    this.wallMaskedLightMapCanvas.width = Game.screen.x;
    this.wallMaskedLightMapCanvas.height = Game.screen.y;
    this.wallMaskedLightMapContext.save();

    this.wallMaskedLightMapContext.drawImage(
      this.lightMapCanvas,
      0,
      LightingSystem.WALL_LIGHTING_Y_OFFSET
    );
    this.wallMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.wallMaskedLightMapContext.drawImage(this.wallMaskCanvas, 0, 0);

    this.wallMaskedLightMapContext.restore();
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.globalCompositeOperation = 'multiply';
    context.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
    context.drawImage(this.wallMaskedLightMapCanvas, 0, 0);

    context.restore();
  }
}
