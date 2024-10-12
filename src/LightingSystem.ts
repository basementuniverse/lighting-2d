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
import { Side } from './types';
import { rectangleToInterval } from './utils';
import { WallShadowReceiver } from './WallShadowReceiver';

export class LightingSystem {
  public static readonly WALL_LIGHTING_Y_OFFSET = -30;
  public static readonly MERGE_MAX_ITERATIONS = 100;
  public static readonly MERGE_ORDER = [
    'duplicate',
    Side.Bottom,
    Side.Right,
    Side.Top,
    Side.Left,
  ];

  public ambientLightColour = 'black';
  public lights: Light[] = [];

  public groundMaskCanvas: HTMLCanvasElement;
  private groundMaskContext: CanvasRenderingContext2D;

  public groundMaskedLightMapCanvas: HTMLCanvasElement;
  private groundMaskedLightMapContext: CanvasRenderingContext2D;

  public wallMaskCanvas: HTMLCanvasElement;
  private wallMaskContext: CanvasRenderingContext2D;

  public wallMaskedLightMapCanvas: HTMLCanvasElement;
  private wallMaskedLightMapContext: CanvasRenderingContext2D;

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

    this.wallMaskCanvas = document.createElement('canvas');
    this.wallMaskCanvas.width = Game.screen.x;
    this.wallMaskCanvas.height = Game.screen.y;
    this.wallMaskContext = this.wallMaskCanvas.getContext('2d')!;

    this.wallMaskedLightMapCanvas = document.createElement('canvas');
    this.wallMaskedLightMapCanvas.width = Game.screen.x;
    this.wallMaskedLightMapCanvas.height = Game.screen.y;
    this.wallMaskedLightMapContext =
      this.wallMaskedLightMapCanvas.getContext('2d')!;
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

    // Prepare wall mask
    this.wallMaskCanvas.width = Game.screen.x;
    this.wallMaskCanvas.height = Game.screen.y;
    this.wallMaskContext.save();
    camera.setTransforms(this.wallMaskContext);

    wallShadowReceivers.forEach(wall => {
      wall.drawMask(this.wallMaskContext);
    });

    this.wallMaskContext.restore();

    // Prepare ground-masked lightmap canvas
    this.groundMaskedLightMapCanvas.width = Game.screen.x;
    this.groundMaskedLightMapCanvas.height = Game.screen.y;
    this.groundMaskedLightMapContext.save();
    camera.setTransforms(this.groundMaskedLightMapContext);

    this.groundMaskedLightMapContext.fillStyle = this.ambientLightColour;
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

    // Prepare wall-masked lightmap canvas
    this.wallMaskedLightMapCanvas.width = Game.screen.x;
    this.wallMaskedLightMapCanvas.height = Game.screen.y;
    this.wallMaskedLightMapContext.save();
    camera.setTransforms(this.wallMaskedLightMapContext);

    this.wallMaskedLightMapContext.fillStyle = this.ambientLightColour;
    this.wallMaskedLightMapContext.fillRect(
      camera.bounds.left,
      camera.bounds.top,
      camera.bounds.right - camera.bounds.left,
      camera.bounds.bottom - camera.bounds.top
    );

    // Draw lights
    this.wallMaskedLightMapContext.globalCompositeOperation = 'screen';
    this.lights.forEach(light => {
      this.wallMaskedLightMapContext.drawImage(
        light.wallLightCanvas,
        light.position.x - light.radius,
        light.position.y - light.radius + LightingSystem.WALL_LIGHTING_Y_OFFSET
      );
    });

    this.prepareNonLightReceivingWallShadows(wallShadowReceivers);

    // Mask wall
    this.wallMaskedLightMapContext.save();
    this.wallMaskedLightMapContext.setTransform(1, 0, 0, 1, 0, 0);
    this.wallMaskedLightMapContext.globalCompositeOperation =
      'destination-atop';
    this.wallMaskedLightMapContext.drawImage(this.wallMaskCanvas, 0, 0);
    this.wallMaskedLightMapContext.restore();
    this.wallMaskedLightMapContext.restore();
  }

  /**
   * Prepare full shadows for non-light-receiving walls
   */
  private prepareNonLightReceivingWallShadows(
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallMaskedLightMapContext.save();
    this.wallMaskedLightMapContext.globalCompositeOperation = 'source-over';
    this.wallMaskedLightMapContext.fillStyle = this.ambientLightColour;

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };

      if (!wall.receiveLight) {
        this.wallMaskedLightMapContext.fillRect(
          wallRectangle.position.x,
          wallRectangle.position.y,
          wallRectangle.size.x,
          wallRectangle.size.y
        );
      }
    }

    this.wallMaskedLightMapContext.restore();
  }

  /**
   * Draw the lightmaps to the context
   */
  public draw(context: CanvasRenderingContext2D) {
    context.save();

    context.globalCompositeOperation = 'multiply';
    context.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
    context.drawImage(this.wallMaskedLightMapCanvas, 0, 0);

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
