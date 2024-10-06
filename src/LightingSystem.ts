import { CircleShadowCaster } from './CircleShadowCaster';
import Game from './Game';
import { GroundShadowReceiver } from './GroundShadowReceiver';
import { Light } from './Light';
import { RegionShadowCaster } from './RegionShadowCaster';
import { SpriteShadowCaster } from './SpriteShadowCaster';
import { WallShadowReceiver } from './WallShadowReceiver';

export class LightingSystem {
  public static readonly WALL_LIGHTING_Y_OFFSET = -30;

  public ambientLightColour = 'black';
  public lights: Light[] = [];

  public groundMaskCanvas: HTMLCanvasElement;
  private groundMaskContext: CanvasRenderingContext2D;

  public wallMaskCanvas: HTMLCanvasElement;
  private wallMaskContext: CanvasRenderingContext2D;

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
    groundShadowReceivers: GroundShadowReceiver[],
    wallShadowReceivers: WallShadowReceiver[],
    regionShadowCasters: RegionShadowCaster[],
    spriteShadowCasters: SpriteShadowCaster[],
    circleShadowCasters: CircleShadowCaster[]
  ) {
    this.lights.forEach(light =>
      light.prepare(
        groundShadowReceivers,
        wallShadowReceivers,
        regionShadowCasters,
        spriteShadowCasters,
        circleShadowCasters
      )
    );

    // Prepare ground mask
    this.groundMaskCanvas.width = Game.screen.x;
    this.groundMaskCanvas.height = Game.screen.y;
    this.groundMaskContext.save();

    groundShadowReceivers.forEach(ground => {
      ground.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.globalCompositeOperation = 'destination-out';

    wallShadowReceivers.forEach(wall => {
      wall.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.restore();

    // Prepare wall mask
    this.wallMaskCanvas.width = Game.screen.x;
    this.wallMaskCanvas.height = Game.screen.y;
    this.wallMaskContext.save();

    wallShadowReceivers.forEach(wall => {
      wall.drawMask(this.wallMaskContext);
    });

    this.wallMaskContext.restore();

    // Prepare ground-mask lightmap canvas
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext.save();

    this.groundMaskedLightMapContext.fillStyle = this.ambientLightColour;
    this.groundMaskedLightMapContext.fillRect(
      0,
      0,
      Game.screen.x,
      Game.screen.y
    );

    // Draw lights
    this.groundMaskedLightMapContext.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.groundMaskedLightMapContext.drawImage(
        light.groundLightCanvas,
        light.position.x - light.radius,
        light.position.y - light.radius
      );
    });

    // Mask ground
    this.groundMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.groundMaskedLightMapContext.drawImage(this.groundMaskCanvas, 0, 0);

    // Prepare wall-mask lightmap canvas
    this.wallMaskedLightMapCanvas.width = Game.screen.x;
    this.wallMaskedLightMapCanvas.height = Game.screen.y;
    this.wallMaskedLightMapContext.save();

    this.wallMaskedLightMapContext.fillStyle = this.ambientLightColour;
    this.wallMaskedLightMapContext.fillRect(0, 0, Game.screen.x, Game.screen.y);

    // Draw lights
    this.wallMaskedLightMapContext.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.wallMaskedLightMapContext.drawImage(
        light.wallLightCanvas,
        light.position.x - light.radius,
        light.position.y - light.radius + LightingSystem.WALL_LIGHTING_Y_OFFSET
      );
    });

    // Mask wall
    this.wallMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.wallMaskedLightMapContext.drawImage(this.wallMaskCanvas, 0, 0);
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.globalCompositeOperation = 'multiply';
    context.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
    context.drawImage(this.wallMaskedLightMapCanvas, 0, 0);

    context.restore();
  }
}
