import Camera from '@basementuniverse/camera';
import { pluck } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { CircleShadowCaster } from './CircleShadowCaster';
import Game from './Game';
import { GroundShadowReceiver } from './GroundShadowReceiver';
import { Light } from './Light';
import { LightingScene } from './LightingScene';
import { RegionShadowCaster } from './RegionShadowCaster';
import { SpriteShadowCaster } from './SpriteShadowCaster';
import { Side, WallShadowLayer } from './types';
import { rectangleToInterval } from './utils';
import { WallShadowReceiver } from './WallShadowReceiver';

type LightingSystemOptions = {
  /**
   * Should image smoothing be enabled?
   *
   * Set this to false for pixel art style
   */
  imageSmoothingEnabled: boolean;

  /**
   * Should soft shadows be enabled?
   *
   * This will only apply if softShadowsAmount is > 0
   */
  softShadowsEnabled: boolean;

  /**
   * Amount of soft shadows to apply
   *
   * Set this to 0 to disable soft shadows
   */
  softShadowsAmount: number;

  /**
   * Colour of ambient (global) light
   */
  ambientLightColour: string;

  /**
   * Vertical offset for wall lighting
   */
  wallLightingYOffset: number;

  /**
   * Distance above bottom edge of wall shadow receivers before light is
   * totally cut off
   */
  wallLightingCutoffDistance: number;

  /**
   * Length of sprite wall shadows will be scaled by this amount
   */
  spriteWallShadowLengthFactor: number;

  /**
   * Sprite wall shadow intercept will be offset by this amount (as a factor
   * of the total edge length)
   */
  spriteWallShadowInterceptOffset: number;

  /**
   * Height of circle wall shadows will be scaled by this amount
   */
  circleWallShadowLengthFactor: number;
};

export class LightingSystem {
  private static readonly DEFAULT_OPTIONS: LightingSystemOptions = {
    imageSmoothingEnabled: true,
    softShadowsEnabled: false,
    softShadowsAmount: 2,
    ambientLightColour: 'black',
    wallLightingYOffset: -30,
    wallLightingCutoffDistance: 20,
    spriteWallShadowLengthFactor: 0.75,
    spriteWallShadowInterceptOffset: 0.1,
    circleWallShadowLengthFactor: 0.5,
  };
  private static readonly MERGE_MAX_ITERATIONS = 100;
  private static readonly MERGE_ORDER = [
    'duplicate',
    Side.Bottom,
    Side.Right,
    Side.Top,
    Side.Left,
  ];

  public options: LightingSystemOptions;

  public lights: Light[] = [];

  public groundMaskCanvas: HTMLCanvasElement;
  private groundMaskContext: CanvasRenderingContext2D;

  public groundMaskedLightMapCanvas: HTMLCanvasElement;
  private groundMaskedLightMapContext: CanvasRenderingContext2D;

  public wallMask1Canvas: HTMLCanvasElement;
  private wallMask1Context: CanvasRenderingContext2D;

  public wallMaskedLightMap1Canvas: HTMLCanvasElement;
  private wallMaskedLightMap1Context: CanvasRenderingContext2D;

  public wallMask2Canvas: HTMLCanvasElement;
  private wallMask2Context: CanvasRenderingContext2D;

  public wallMaskedLightMap2Canvas: HTMLCanvasElement;
  private wallMaskedLightMap2Context: CanvasRenderingContext2D;

  public constructor(options?: Partial<LightingSystemOptions>) {
    this.options = Object.assign(
      {},
      LightingSystem.DEFAULT_OPTIONS,
      options ?? {}
    );
  }

  /**
   * Initialise lighting system canvases
   */
  public initialise() {
    this.groundMaskCanvas = document.createElement('canvas');
    this.groundMaskCanvas.width = Game.screen.x;
    this.groundMaskCanvas.height = Game.screen.y;
    this.groundMaskContext = this.groundMaskCanvas.getContext('2d')!;

    this.groundMaskedLightMapCanvas = document.createElement('canvas');
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext =
      this.groundMaskedLightMapCanvas.getContext('2d')!;

    this.wallMask1Canvas = document.createElement('canvas');
    this.wallMask1Canvas.width = Game.screen.x;
    this.wallMask1Canvas.height = Game.screen.y;
    this.wallMask1Context = this.wallMask1Canvas.getContext('2d')!;

    this.wallMaskedLightMap1Canvas = document.createElement('canvas');
    this.wallMaskedLightMap1Canvas.width = Game.screen.x;
    this.wallMaskedLightMap1Canvas.height = Game.screen.y;
    this.wallMaskedLightMap1Context =
      this.wallMaskedLightMap1Canvas.getContext('2d')!;

    this.wallMask2Canvas = document.createElement('canvas');
    this.wallMask2Canvas.width = Game.screen.x;
    this.wallMask2Canvas.height = Game.screen.y;
    this.wallMask2Context = this.wallMask2Canvas.getContext('2d')!;

    this.wallMaskedLightMap2Canvas = document.createElement('canvas');
    this.wallMaskedLightMap2Canvas.width = Game.screen.x;
    this.wallMaskedLightMap2Canvas.height = Game.screen.y;
    this.wallMaskedLightMap2Context =
      this.wallMaskedLightMap2Canvas.getContext('2d')!;
  }

  /**
   * Update the lighting system's lights
   */
  public update(dt: number) {
    this.lights.forEach(light => light.update(dt));
  }

  /**
   * Prepare the lightmaps for rendering
   */
  public prepare(
    camera: Camera,
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
    this.groundMaskContext.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.groundMaskContext.save();
    camera.setTransforms(this.groundMaskContext);

    groundShadowReceivers.forEach(ground => {
      ground.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.globalCompositeOperation = 'destination-out';

    wallShadowReceivers.forEach(wall => {
      wall.drawMask(this.groundMaskContext);
    });

    this.groundMaskContext.restore();

    // Prepare wall mask 1
    this.wallMask1Canvas.width = Game.screen.x;
    this.wallMask1Canvas.height = Game.screen.y;
    this.wallMask1Context.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.wallMask1Context.save();
    camera.setTransforms(this.wallMask1Context);

    wallShadowReceivers.forEach(wall => {
      if (wall.layer === WallShadowLayer.One) {
        wall.drawMask(this.wallMask1Context);
      }
    });

    this.wallMask1Context.globalCompositeOperation = 'destination-out';

    wallShadowReceivers.forEach(wall => {
      if (wall.layer === WallShadowLayer.Two) {
        wall.drawMask(this.wallMask1Context);
      }
    });

    this.wallMask1Context.restore();

    // Prepare wall mask 2
    this.wallMask2Canvas.width = Game.screen.x;
    this.wallMask2Canvas.height = Game.screen.y;
    this.wallMask2Context.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.wallMask2Context.save();
    camera.setTransforms(this.wallMask2Context);

    wallShadowReceivers.forEach(wall => {
      if (wall.layer === WallShadowLayer.Two) {
        wall.drawMask(this.wallMask2Context);
      }
    });

    this.wallMask2Context.restore();

    // Prepare ground-masked lightmap canvas
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.groundMaskedLightMapContext.save();
    camera.setTransforms(this.groundMaskedLightMapContext);

    this.groundMaskedLightMapContext.fillStyle =
      this.options.ambientLightColour;
    this.groundMaskedLightMapContext.fillRect(
      camera.bounds.left,
      camera.bounds.top,
      camera.bounds.right - camera.bounds.left,
      camera.bounds.bottom - camera.bounds.top
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
    this.groundMaskedLightMapContext.save();
    this.groundMaskedLightMapContext.setTransform(1, 0, 0, 1, 0, 0);
    this.groundMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.groundMaskedLightMapContext.drawImage(this.groundMaskCanvas, 0, 0);
    this.groundMaskedLightMapContext.restore();
    this.groundMaskedLightMapContext.restore();

    // Prepare wall-masked lightmap 1 canvas
    this.wallMaskedLightMap1Canvas.width = Game.screen.x;
    this.wallMaskedLightMap1Canvas.height = Game.screen.y;
    this.wallMaskedLightMap1Context.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.wallMaskedLightMap1Context.save();
    camera.setTransforms(this.wallMaskedLightMap1Context);

    this.wallMaskedLightMap1Context.fillStyle = this.options.ambientLightColour;
    this.wallMaskedLightMap1Context.fillRect(
      camera.bounds.left,
      camera.bounds.top,
      camera.bounds.right - camera.bounds.left,
      camera.bounds.bottom - camera.bounds.top
    );

    // Draw lights
    this.wallMaskedLightMap1Context.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.wallMaskedLightMap1Context.drawImage(
        light.wallLight1Canvas,
        light.position.x - light.radius,
        light.position.y - light.radius + this.options.wallLightingYOffset
      );
    });

    // Prepare wall-masked lightmap 2 canvas
    this.wallMaskedLightMap2Canvas.width = Game.screen.x;
    this.wallMaskedLightMap2Canvas.height = Game.screen.y;
    this.wallMaskedLightMap2Context.imageSmoothingEnabled =
      this.options.imageSmoothingEnabled;
    this.wallMaskedLightMap2Context.save();
    camera.setTransforms(this.wallMaskedLightMap2Context);

    this.wallMaskedLightMap2Context.fillStyle = this.options.ambientLightColour;
    this.wallMaskedLightMap2Context.fillRect(
      camera.bounds.left,
      camera.bounds.top,
      camera.bounds.right - camera.bounds.left,
      camera.bounds.bottom - camera.bounds.top
    );

    // Draw lights
    this.wallMaskedLightMap2Context.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.wallMaskedLightMap2Context.drawImage(
        light.wallLight2Canvas,
        light.position.x - light.radius,
        light.position.y - light.radius + this.options.wallLightingYOffset
      );
    });

    this.prepareNonLightReceivingWallShadows(wallShadowReceivers);

    // Mask walls layer 1
    this.wallMaskedLightMap1Context.save();
    this.wallMaskedLightMap1Context.setTransform(1, 0, 0, 1, 0, 0);
    this.wallMaskedLightMap1Context.globalCompositeOperation =
      'destination-atop';
    this.wallMaskedLightMap1Context.drawImage(this.wallMask1Canvas, 0, 0);
    this.wallMaskedLightMap1Context.restore();
    this.wallMaskedLightMap1Context.restore();

    // Mask walls layer 2
    this.wallMaskedLightMap2Context.save();
    this.wallMaskedLightMap2Context.setTransform(1, 0, 0, 1, 0, 0);
    this.wallMaskedLightMap2Context.globalCompositeOperation =
      'destination-atop';
    this.wallMaskedLightMap2Context.drawImage(this.wallMask2Canvas, 0, 0);
    this.wallMaskedLightMap2Context.restore();
    this.wallMaskedLightMap2Context.restore();
  }

  /**
   * Prepare full shadows for non-light-receiving walls
   */
  private prepareNonLightReceivingWallShadows(
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallMaskedLightMap1Context.save();
    this.wallMaskedLightMap1Context.globalCompositeOperation = 'source-over';
    this.wallMaskedLightMap1Context.fillStyle = this.options.ambientLightColour;

    this.wallMaskedLightMap2Context.save();
    this.wallMaskedLightMap2Context.globalCompositeOperation = 'source-over';
    this.wallMaskedLightMap2Context.fillStyle = this.options.ambientLightColour;

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };

      if (!wall.receiveLight) {
        switch (wall.layer) {
          case WallShadowLayer.One:
            this.wallMaskedLightMap1Context.fillRect(
              wallRectangle.position.x,
              wallRectangle.position.y,
              wallRectangle.size.x,
              wallRectangle.size.y
            );
            break;

          case WallShadowLayer.Two:
            this.wallMaskedLightMap2Context.fillRect(
              wallRectangle.position.x,
              wallRectangle.position.y,
              wallRectangle.size.x,
              wallRectangle.size.y
            );
            break;
        }
      }
    }

    this.wallMaskedLightMap1Context.restore();
    this.wallMaskedLightMap2Context.restore();
  }

  /**
   * Set up soft shadow settings on the specified canvas context
   */
  public setupSoftShadows(context: CanvasRenderingContext2D) {
    if (
      this.options.softShadowsEnabled &&
      this.options.softShadowsAmount !== undefined &&
      this.options.softShadowsAmount > 0
    ) {
      context.shadowColor = 'black';
      context.shadowBlur = this.options.softShadowsAmount;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    }
  }

  /**
   * Draw the lightmaps to the context
   */
  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.globalCompositeOperation = 'multiply';
    context.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
    context.drawImage(this.wallMaskedLightMap1Canvas, 0, 0);
    context.drawImage(this.wallMaskedLightMap2Canvas, 0, 0);

    context.restore();
  }

  /**
   * Optimise region shadow casters by merging adjacent casters
   */
  public static mergeRegionShadowCasters(
    scene: LightingScene,
    casters: RegionShadowCaster[]
  ): RegionShadowCaster[] {
    let result = [...casters].sort((a, b) => {
      if (a.position.y === b.position.y) {
        return a.position.x - b.position.x;
      }

      return a.position.y - b.position.y;
    });

    let i = 0;
    let merges: [RegionShadowCaster, RegionShadowCaster, Side | 'duplicate'][];
    while (
      (merges = LightingSystem.findMerges(result)).length > 0 &&
      i++ < LightingSystem.MERGE_MAX_ITERATIONS
    ) {
      merges.sort(
        (a, b) =>
          LightingSystem.MERGE_ORDER.indexOf(a[2]) -
          LightingSystem.MERGE_ORDER.indexOf(b[2])
      );
      for (const merge of merges) {
        const a = result.find(caster => caster.id === merge[0].id);
        const b = result.find(caster => caster.id === merge[1].id);
        const side = merge[2];

        if (a === undefined || b === undefined) {
          continue;
        }

        if (side === 'duplicate') {
          result = result.filter(caster => caster.id !== b.id);
          continue;
        }

        result = result.filter(caster => ![a.id, b.id].includes(caster.id));
        result.push(a.merge(scene, b));
        a.destroy();
        b.destroy();
      }
    }

    return result;
  }

  /**
   * Optimise wall shadow receivers by merging adjacent receivers
   */
  public static mergeWallShadowReceivers(
    scene: LightingScene,
    receivers: WallShadowReceiver[]
  ): WallShadowReceiver[] {
    let result = [...receivers].sort((a, b) => {
      if (a.position.y === b.position.y) {
        return a.position.x - b.position.x;
      }

      return a.position.y - b.position.y;
    });

    let i = 0;
    let merges: [WallShadowReceiver, WallShadowReceiver, Side | 'duplicate'][];
    while (
      (merges = LightingSystem.findMerges(
        result,
        (a, b) => a.colour === b.colour && a.receiveLight === b.receiveLight
      )).length > 0 &&
      i++ < LightingSystem.MERGE_MAX_ITERATIONS
    ) {
      merges.sort(
        (a, b) =>
          LightingSystem.MERGE_ORDER.indexOf(a[2]) -
          LightingSystem.MERGE_ORDER.indexOf(b[2])
      );
      for (const merge of merges) {
        const a = result.find(receiver => receiver.id === merge[0].id);
        const b = result.find(receiver => receiver.id === merge[1].id);
        const side = merge[2];

        if (a === undefined || b === undefined) {
          continue;
        }

        if (side === 'duplicate') {
          result = result.filter(receiver => receiver.id !== b.id);
          continue;
        }

        result = result.filter(receiver => ![a.id, b.id].includes(receiver.id));
        result.push(a.merge(scene, b));
        a.destroy();
        b.destroy();
      }
    }

    return result;
  }

  /**
   * Find pairs of items that are adjacent to each other and can be merged
   */
  private static findMerges<T extends { position: vec; size: vec }>(
    items: T[],
    extraComparison?: (a: T, b: T) => boolean
  ): [T, T, Side | 'duplicate'][] {
    const result: [T, T, Side | 'duplicate'][] = [];

    for (let i = 0; i < items.length; i++) {
      const a = rectangleToInterval(pluck(items[i], 'position', 'size'));

      for (let j = i + 1; j < items.length; j++) {
        const b = rectangleToInterval(pluck(items[j], 'position', 'size'));

        // A and B are the same
        if (
          a.top === b.top &&
          a.bottom === b.bottom &&
          a.left === b.left &&
          a.right === b.right &&
          (extraComparison?.(items[i], items[j]) ?? true)
        ) {
          result.push([items[i], items[j], 'duplicate']);
          continue;
        }

        // B is connected to the bottom edge of A
        if (
          a.bottom === b.top &&
          a.left === b.left &&
          a.right === b.right &&
          (extraComparison?.(items[i], items[j]) ?? true)
        ) {
          result.push([items[i], items[j], Side.Bottom]);
        }

        // B is connected to the top edge of A
        if (
          a.top === b.bottom &&
          a.left === b.left &&
          a.right === b.right &&
          (extraComparison?.(items[i], items[j]) ?? true)
        ) {
          result.push([items[i], items[j], Side.Top]);
        }

        // B is connected to the right edge of A
        if (
          a.right === b.left &&
          a.top === b.top &&
          a.bottom === b.bottom &&
          (extraComparison?.(items[i], items[j]) ?? true)
        ) {
          result.push([items[i], items[j], Side.Right]);
        }

        // B is connected to the left edge of A
        if (
          a.left === b.right &&
          a.top === b.top &&
          a.bottom === b.bottom &&
          (extraComparison?.(items[i], items[j]) ?? true)
        ) {
          result.push([items[i], items[j], Side.Left]);
        }
      }
    }

    return result;
  }
}
