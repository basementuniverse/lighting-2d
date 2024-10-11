import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { parseColor } from '@basementuniverse/parsecolor';
import {
  at,
  clamp,
  exclude,
  remap,
  smoothstep,
  unlerp,
} from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { CircleShadowCaster } from './CircleShadowCaster';
import * as constants from './constants';
import Game from './Game';
import { GroundShadowReceiver } from './GroundShadowReceiver';
import { LightingScene } from './LightingScene';
import { LightingSystem } from './LightingSystem';
import { RegionShadowCaster } from './RegionShadowCaster';
import ShadowCaster from './ShadowCaster';
import { SpriteShadowCaster } from './SpriteShadowCaster';
import {
  Colour,
  Interval2d,
  Line,
  PolygonVertices,
  Rectangle,
  Sector2d,
} from './types';
import {
  colourToString,
  lineIsFacing,
  lineYIntercept,
  overlap1d,
  polygon,
  rectanglesIntersect,
  rectangleToInterval,
  rectangleVertices,
  sector2d,
} from './utils';
import { WallShadowReceiver } from './WallShadowReceiver';

const INTERCEPT_X = 0;
const INTERCEPT_T = 1;

type Shadow<T extends ShadowCaster> = {
  /**
   * The entity that is casting this shadow
   */
  caster: T;

  /**
   * The leftmost edge of the shadow
   */
  leftEdge: Line | null;

  /**
   * The rightmost edge of the shadow
   */
  rightEdge: Line | null;

  /**
   * The position of a circle shadow (only used when rendering a circle shadow
   * onto a wall)
   */
  position?: vec;

  /**
   * The size of a circle shadow (only used when rendering a circle shadow onto
   * a wall)
   */
  size?: vec;
};

export class Light {
  private static readonly DEFAULT_RADIUS = 100;
  private static readonly DEFAULT_COLOUR = 'white';
  private static readonly DEFAULT_INTENSITY = 0.2;
  private static readonly HOVER_RADIUS = 20;
  private static readonly DEBUG_COLOUR = '#5b3';
  private static readonly DEBUG_HOVER_COLOUR = '#7e5';
  private static readonly MIN_RADIUS = 10;
  private static readonly MAX_RADIUS = 400;
  private static readonly SHADOW_BUFFER = 20;
  private static readonly WALL_LIGHT_CUTOFF_DISTANCE = 20;
  private static readonly SPRITE_WALL_SHADOW_LENGTH_COEFFICIENT = 0.75;
  private static readonly SPRITE_SHADOW_MIN_LENGTH_COEFFICIENT = 0.75;
  private static readonly SPRITE_SHADOW_MAX_LENGTH_COEFFICIENT = 4;
  private static readonly SPRITE_SHADOW_INTERCEPT_OFFSET = 0.1;
  private static readonly CIRCLE_WALL_SHADOW_HEIGHT_COEFFICIENT = 0.5;

  public readonly type = 'Light';

  private scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  private _radius: number = Light.DEFAULT_RADIUS;
  private _colour: string = Light.DEFAULT_COLOUR;
  public colourObject: Colour;
  private _intensity: number = Light.DEFAULT_INTENSITY;
  public castShadows: boolean = true;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public lightCanvas: HTMLCanvasElement;
  private lightContext: CanvasRenderingContext2D;

  public groundLightCanvas: HTMLCanvasElement;
  private groundLightContext: CanvasRenderingContext2D;

  public wallLightCanvas: HTMLCanvasElement;
  private wallLightContext: CanvasRenderingContext2D;

  private dirty = true;

  public constructor(scene: LightingScene, data: Partial<Light> = {}) {
    this.scene = scene;

    Object.assign(this, exclude(data, 'radius', 'colour', 'intensity'), {
      id: data.id ?? uuid().split('-')[0],
      _radius: data.radius ?? Light.DEFAULT_RADIUS,
      _colour: data.colour ?? Light.DEFAULT_COLOUR,
      _intensity: data.intensity ?? Light.DEFAULT_INTENSITY,
    });

    this.folder = Game.gui.addFolder(`Light ${this.id}`);
    this.folder.add(this.position, 'x');
    this.folder.add(this.position, 'y');
    this.folder.add(this, 'radius', Light.MIN_RADIUS, Light.MAX_RADIUS);
    this.folder.add(this, 'colour');
    this.folder.add(this, 'intensity', 0, 1);
    this.folder.add(this, 'castShadows');

    this.colourObject = parseColor(this._colour);

    this.lightCanvas = document.createElement('canvas');
    this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
    this.lightContext = this.lightCanvas.getContext('2d')!;

    this.groundLightCanvas = document.createElement('canvas');
    this.groundLightCanvas.width = this.groundLightCanvas.height =
      this._radius * 2;
    this.groundLightContext = this.groundLightCanvas.getContext('2d')!;

    this.wallLightCanvas = document.createElement('canvas');
    this.wallLightCanvas.width = this.wallLightCanvas.height = this._radius * 2;
    this.wallLightContext = this.wallLightCanvas.getContext('2d')!;
  }

  public get radius() {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
    this.dirty = true;
  }

  public get colour() {
    return this._colour;
  }

  public set colour(value: string) {
    this._colour = value;
    this.colourObject = parseColor(value);
    this.dirty = true;
  }

  public get intensity() {
    return this._intensity;
  }

  public set intensity(value: number) {
    this._intensity = value;
    this.dirty = true;
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      radius: this._radius,
      colour: this._colour,
      intensity: this._intensity,
      castShadows: this.castShadows,
    };
  }

  public static deserialise(scene: LightingScene, data: any): Light {
    return new Light(scene, data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public update(dt: number) {
    const mouseWorldPosition = this.scene.camera.positionToWorld(
      InputManager.mousePosition
    );

    this.hovered =
      vec.len(vec.sub(mouseWorldPosition, this.position)) < Light.HOVER_RADIUS;

    if (InputManager.mouseDown() && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec.sub(mouseWorldPosition, this.position);
    }

    if (!InputManager.mouseDown()) {
      this.dragging = false;
      this.dragOffset = null;
    }

    if (this.selected && this.dragging && this.dragOffset) {
      if (InputManager.keyDown('ControlLeft')) {
        this.radius = clamp(
          vec.len(vec.sub(mouseWorldPosition, this.position)),
          Light.MIN_RADIUS,
          Light.MAX_RADIUS
        );
      } else {
        this.position = vec.sub(mouseWorldPosition, this.dragOffset);
      }
    }

    Debug.border(`Light ${this.id} border`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: false,
      showValue: false,
      borderShape: 'circle',
      radius: this.radius,
      borderColour:
        this.hovered || this.dragging
          ? Light.DEBUG_HOVER_COLOUR
          : Light.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
    Debug.marker(`Light ${this.id}`, this.id, this.position, {
      level: 1,
      space: 'world',
      showLabel: Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      markerColour:
        this.hovered || this.dragging
          ? Light.DEBUG_HOVER_COLOUR
          : Light.DEBUG_COLOUR,
    });
  }

  public prepare(
    groundShadowReceivers: GroundShadowReceiver[],
    wallShadowReceivers: WallShadowReceiver[],
    regionShadowCasters: RegionShadowCaster[],
    spriteShadowCasters: SpriteShadowCaster[],
    circleShadowCasters: CircleShadowCaster[]
  ) {
    // If the light settings have changed, we need to redraw the base lightmap
    if (this.dirty) {
      this.prepareLightMap();
    }

    // Bounding box for this light
    const lightRectangle = {
      position: vec.add(
        vec.sub(this.position, vec(this._radius)),
        vec(0, LightingSystem.WALL_LIGHTING_Y_OFFSET)
      ),
      size: vec.add(
        vec(this._radius * 2),
        vec(0, Math.abs(LightingSystem.WALL_LIGHTING_Y_OFFSET))
      ),
    };

    // Render light onto ground light canvas
    this.groundLightCanvas.width = this.groundLightCanvas.height =
      this._radius * 2;
    this.groundLightContext.drawImage(this.lightCanvas, 0, 0);

    // Subtract shadows from ground lightmap
    let regionShadows: Shadow<RegionShadowCaster>[] = [];
    let spriteShadows: Shadow<SpriteShadowCaster>[] = [];
    let circleShadows: Shadow<CircleShadowCaster>[] = [];
    if (this.castShadows) {
      regionShadows = this.prepareGroundRegionShadows(
        lightRectangle,
        regionShadowCasters
      );

      spriteShadows = this.prepareGroundSpriteShadows(
        lightRectangle,
        spriteShadowCasters
      );

      circleShadows = this.prepareGroundCircleShadows(
        lightRectangle,
        circleShadowCasters
      );
    }

    // Render light onto wall light canvas
    this.wallLightCanvas.width = this.wallLightCanvas.height = this._radius * 2;
    this.wallLightContext.drawImage(this.lightCanvas, 0, 0);

    // Prepare full-wall shading based on whether the wall is above or below
    // the light position
    this.prepareInitialShading(lightRectangle, wallShadowReceivers);

    // Subtract region shadows from wall lightmap
    if (this.castShadows) {
      this.prepareWallRegionShadows(
        lightRectangle,
        regionShadows,
        regionShadowCasters,
        wallShadowReceivers
      );

      this.prepareWallSpriteShadows(
        lightRectangle,
        spriteShadows,
        wallShadowReceivers
      );

      this.prepareWallCircleShadows(
        lightRectangle,
        circleShadows,
        wallShadowReceivers
      );
    }
  }

  private prepareLightMap() {
    this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;

    this.lightContext.save();
    this.lightContext.fillStyle = 'black';
    this.lightContext.fillRect(
      0,
      0,
      this.lightCanvas.width,
      this.lightCanvas.height
    );

    const gradient = this.lightContext.createRadialGradient(
      this._radius,
      this._radius,
      this._radius * this._intensity,
      this._radius,
      this._radius,
      this._radius
    );
    gradient.addColorStop(0, colourToString(this.colourObject));
    gradient.addColorStop(1, 'black');

    this.lightContext.fillStyle = gradient;
    this.lightContext.beginPath();
    this.lightContext.arc(
      this._radius,
      this._radius,
      this._radius,
      0,
      Math.PI * 2
    );
    this.lightContext.fill();

    this.lightContext.restore();
  }

  private prepareInitialShading(
    lightRectangle: Rectangle,
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallLightContext.save();
    this.wallLightContext.fillStyle = 'black';
    this.wallLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius - LightingSystem.WALL_LIGHTING_Y_OFFSET
    );

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };
      const wallInterval = rectangleToInterval(wallRectangle);

      // Check if this wall shadow receiver is in range of the light
      if (rectanglesIntersect(lightRectangle, wallRectangle)) {
        // If the wall doesn't receive light, it also doesn't receive
        // partial or full shadows
        if (!wall.receiveLight) {
          continue;
        }

        // The wall is only lit by this light if it's above the light
        if (this.position.y < wallInterval.bottom) {
          this.wallLightContext.save();
          this.wallLightContext.globalAlpha = clamp(
            remap(
              wallInterval.bottom - this.position.y,
              0,
              Light.WALL_LIGHT_CUTOFF_DISTANCE,
              0,
              1
            ),
            0,
            1
          );
          this.wallLightContext.fillRect(
            wallRectangle.position.x,
            wallRectangle.position.y,
            wallRectangle.size.x,
            wallRectangle.size.y
          );
          this.wallLightContext.restore();
        }
      }
    }
    this.wallLightContext.restore();
  }

  private prepareGroundRegionShadows(
    lightRectangle: Rectangle,
    regionShadowCasters: RegionShadowCaster[]
  ): Shadow<RegionShadowCaster>[] {
    this.groundLightContext.save();
    this.groundLightContext.fillStyle = 'black';
    this.groundLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius
    );

    // Shadow metadata for each shadow
    const shadows: Shadow<RegionShadowCaster>[] = [];
    for (const caster of regionShadowCasters) {
      const casterRectangle = {
        position: caster.position,
        size: caster.size,
      };

      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, casterRectangle)) {
        const shadow = {
          caster,
          ...this.prepareRegionShadow(casterRectangle),
        };

        // Save shadow metadata for use later when rendering wall shadows
        shadows.push(exclude(shadow, 'vertices'));

        // Render the ground shadow polygon onto the lightmap
        polygon(this.groundLightContext, ...shadow.vertices);
        this.groundLightContext.fill();
      }
    }
    this.groundLightContext.restore();

    return shadows;
  }

  private prepareGroundSpriteShadows(
    lightRectangle: Rectangle,
    spriteShadowCasters: SpriteShadowCaster[]
  ): Shadow<SpriteShadowCaster>[] {
    this.groundLightContext.save();
    this.groundLightContext.translate(this._radius, this._radius);

    // Shadow metadata for each shadow
    const shadows: Shadow<SpriteShadowCaster>[] = [];
    for (const caster of spriteShadowCasters) {
      const casterRectangle = {
        position: caster.position,
        size: caster.size,
      };

      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, casterRectangle)) {
        const shadowSprite = caster.shadow;

        // If the shadow sprite is missing for this caster then it doesn't
        // cast a shadow
        if (!shadowSprite) {
          continue;
        }

        // Render the ground shadow sprite onto the lightmap
        const shadowOrigin = vec.add(
          caster.position,
          vec(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y)
        );
        const shadowLength = smoothstep(
          caster.size.y * Light.SPRITE_SHADOW_MIN_LENGTH_COEFFICIENT,
          caster.size.y * Light.SPRITE_SHADOW_MAX_LENGTH_COEFFICIENT,
          unlerp(0, this.radius, vec.len(vec.sub(shadowOrigin, this.position)))
        );
        const shadowEdge = vec.mul(
          vec.nor(vec.sub(shadowOrigin, this.position)),
          shadowLength
        );
        const shadowEdgeLength = vec.len(shadowEdge);
        const shadowAngle = vec.rad(shadowEdge) + constants.HALF_PI;

        this.groundLightContext.save();
        this.groundLightContext.translate(
          shadowOrigin.x - this.position.x,
          shadowOrigin.y - this.position.y
        );
        this.groundLightContext.rotate(shadowAngle);
        this.groundLightContext.drawImage(
          shadowSprite,
          -caster.size.x * caster.offset.x,
          -shadowEdgeLength * caster.offset.y,
          caster.size.x,
          shadowEdgeLength
        );
        this.groundLightContext.restore();

        // Save shadow metadata for use later when rendering wall shadows
        const leftCorner = vec.rot(
          vec(caster.size.x * caster.offset.x, 0),
          shadowAngle
        );
        const rightCorner = vec.rot(
          vec(caster.size.x * (1 - caster.offset.x), 0),
          shadowAngle
        );
        shadows.push({
          caster,
          leftEdge: {
            start: vec.sub(shadowOrigin, leftCorner),
            end: vec.sub(vec.add(shadowOrigin, shadowEdge), leftCorner),
          },
          rightEdge: {
            start: vec.add(shadowOrigin, rightCorner),
            end: vec.add(vec.add(shadowOrigin, shadowEdge), rightCorner),
          },
        });
      }
    }
    this.groundLightContext.restore();

    return shadows;
  }

  private prepareGroundCircleShadows(
    lightRectangle: Rectangle,
    circleShadowCasters: CircleShadowCaster[]
  ): Shadow<CircleShadowCaster>[] {
    this.groundLightContext.save();
    this.groundLightContext.fillStyle = 'black';
    this.groundLightContext.translate(this._radius, this._radius);

    // Shadow metadata for each shadow
    const shadows: Shadow<CircleShadowCaster>[] = [];
    for (const caster of circleShadowCasters) {
      const casterRectangle = {
        position: caster.position,
        size: caster.size,
      };

      // Check if this caster is in range of the light
      if (rectanglesIntersect(lightRectangle, casterRectangle)) {
        // Render a circular ground shadow onto the lightmap
        const shadowOrigin = vec.add(
          caster.position,
          vec(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y)
        );
        const shadowDistance = smoothstep(
          caster.minDistance,
          caster.maxDistance ?? this.radius,
          unlerp(0, this.radius, vec.len(vec.sub(shadowOrigin, this.position)))
        );
        const shadowPosition = vec.mul(
          vec.nor(vec.sub(shadowOrigin, this.position)),
          shadowDistance
        );
        const shadowSize = vec.mul(caster.size, 0.5);

        this.groundLightContext.save();
        this.groundLightContext.globalAlpha = caster.alpha;
        this.groundLightContext.translate(
          shadowOrigin.x - this.position.x,
          shadowOrigin.y - this.position.y
        );
        this.groundLightContext.beginPath();
        this.groundLightContext.ellipse(
          shadowPosition.x,
          shadowPosition.y,
          shadowSize.x,
          shadowSize.y,
          0,
          0,
          Math.PI * 2
        );
        this.groundLightContext.fill();
        this.groundLightContext.restore();

        // Save shadow metadata for use later when rendering wall shadows
        shadows.push({
          caster,
          leftEdge: null,
          rightEdge: null,
          position: vec.add(shadowOrigin, shadowPosition),
          size: shadowSize,
        });
      }
    }
    this.groundLightContext.restore();

    return shadows;
  }

  private prepareWallRegionShadows(
    lightRectangle: Rectangle,
    regionShadows: Shadow<RegionShadowCaster>[],
    regionShadowCasters: RegionShadowCaster[],
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallLightContext.save();
    this.wallLightContext.fillStyle = 'black';
    this.wallLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius - LightingSystem.WALL_LIGHTING_Y_OFFSET
    );

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };
      const wallInterval = rectangleToInterval(wallRectangle);

      // Check if this wall shadow receiver is in range of the light
      if (rectanglesIntersect(lightRectangle, wallRectangle)) {
        // If the wall doesn't receive light, it also doesn't receive
        // partial or full shadows
        if (!wall.receiveLight) {
          continue;
        }

        // Check each shadow to see if it fully or partially shadows this wall
        for (const shadow of regionShadows) {
          const shadowCasterRectangle = {
            position: shadow.caster.position,
            size: shadow.caster.size,
          };
          const shadowCasterInterval = rectangleToInterval(
            shadowCasterRectangle
          );

          // A shadow caster doesn't cast a shadow onto a receiver that
          // overlaps it
          if (rectanglesIntersect(wallRectangle, shadowCasterRectangle)) {
            continue;
          }

          // Check if this shadow has no edges (this means the light is inside
          // the shadow caster region, and as such it doesn't cast a shadow)
          if (shadow.leftEdge === null && shadow.rightEdge === null) {
            continue;
          }

          // If both shadow edges are not pointing up then this shadow doesn't
          // cast on this wall
          if (
            shadow.leftEdge &&
            shadow.leftEdge.start.y <= shadow.leftEdge.end.y &&
            shadow.rightEdge &&
            shadow.rightEdge.start.y <= shadow.rightEdge.end.y
          ) {
            continue;
          }

          // Check if this wall's lower edge is below the shadow caster's
          // lower edge. If so, the caster doesn't cast a shadow on this wall
          if (wallInterval.bottom > shadowCasterInterval.bottom) {
            continue;
          }

          // Edge case: if the caster is partially above and below the wall's
          // lower edge and the shadow is pointing away from the wall, we don't
          // cast a shadow
          if (
            shadowCasterInterval.top <= wallInterval.bottom &&
            shadowCasterInterval.bottom >= wallInterval.bottom
          ) {
            // Shadow caster is to the left of shadow receiver
            if (shadowCasterInterval.right <= wallInterval.left) {
              if (
                (shadow.rightEdge === null ||
                  shadow.rightEdge.start.x >= shadow.rightEdge.end.x) &&
                (shadow.leftEdge === null ||
                  shadow.leftEdge.start.x >= shadow.leftEdge.end.x)
              ) {
                continue;
              }
            }

            // Shadow caster is to the right of shadow receiver
            if (shadowCasterInterval.left >= wallInterval.right) {
              if (
                (shadow.rightEdge === null ||
                  shadow.rightEdge.start.x <= shadow.rightEdge.end.x) &&
                (shadow.leftEdge === null ||
                  shadow.leftEdge.start.x <= shadow.leftEdge.end.x)
              ) {
                continue;
              }
            }
          }

          // Check if this wall's lower edge is colinear with the shadow
          // caster's lower edge. If so, we allow light to pass (in most cases)
          // Edge case: if there's another shadow caster directly below the
          // current one, then it might create a shadow
          if (
            wallInterval.bottom === shadowCasterInterval.bottom &&
            !regionShadowCasters.some(c => {
              const casterInterval = rectangleToInterval({
                position: c.position,
                size: c.size,
              });

              return (
                casterInterval.top === shadowCasterInterval.bottom &&
                overlap1d(
                  {
                    start: casterInterval.left,
                    end: casterInterval.right,
                  },
                  {
                    start: shadowCasterInterval.left,
                    end: shadowCasterInterval.right,
                  }
                ) !== null
              );
            })
          ) {
            continue;
          }

          let leftIntercept: number | null = null;
          if (shadow.leftEdge) {
            const leftInterceptResult = lineYIntercept(
              shadow.leftEdge,
              wallInterval.bottom
            );
            if (leftInterceptResult) {
              [leftIntercept] = leftInterceptResult;
            }

            if (shadow.leftEdge.start.y < shadow.leftEdge.end.y) {
              leftIntercept = wallInterval.left;
            }
          }

          let rightIntercept: number | null = null;
          if (shadow.rightEdge) {
            const rightInterceptResult = lineYIntercept(
              shadow.rightEdge,
              wallInterval.bottom
            );
            if (rightInterceptResult) {
              [rightIntercept] = rightInterceptResult;
            }

            if (shadow.rightEdge.start.y < shadow.rightEdge.end.y) {
              rightIntercept = wallInterval.right;
            }
          }

          const min = Math.max(wallInterval.left, leftIntercept ?? -Infinity);
          const max = Math.min(wallInterval.right, rightIntercept ?? Infinity);

          // Don't render the shadow if it's got negative width
          if (min >= max) {
            continue;
          }

          // Don't render the shadow if it's outside the wall boundaries
          if (min > wallInterval.right || max < wallInterval.left) {
            continue;
          }

          if (
            overlap1d(
              {
                start: min,
                end: max,
              },
              {
                start: wallInterval.left,
                end: wallInterval.right,
              }
            )
          ) {
            this.wallLightContext.fillRect(
              min,
              wallInterval.top,
              max - min,
              wall.size.y
            );
          }
        }
      }
    }
    this.wallLightContext.restore();
  }

  private prepareWallSpriteShadows(
    lightRectangle: Rectangle,
    spriteShadows: Shadow<SpriteShadowCaster>[],
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallLightContext.save();
    this.wallLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius - LightingSystem.WALL_LIGHTING_Y_OFFSET
    );

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };
      const wallInterval = rectangleToInterval(wallRectangle);

      // Check if this wall shadow receiver is in range of the light
      if (rectanglesIntersect(lightRectangle, wallRectangle)) {
        // If the wall doesn't receive light, it also doesn't receive
        // partial or full shadows
        if (!wall.receiveLight) {
          continue;
        }

        // Check each shadow to see if it occludes this wall
        for (const shadow of spriteShadows) {
          const shadowSprite = shadow.caster.shadow;

          // If the shadow sprite is missing for this caster then it doesn't
          // cast a shadow
          if (!shadowSprite) {
            continue;
          }

          const shadowCasterRectangle = {
            position: shadow.caster.position,
            size: shadow.caster.size,
          };
          const shadowCasterInterval = rectangleToInterval(
            shadowCasterRectangle
          );

          // A shadow caster doesn't cast a shadow onto a receiver that
          // overlaps it
          if (rectanglesIntersect(wallRectangle, shadowCasterRectangle)) {
            continue;
          }

          // Check if this shadow has no edges (this means the light is inside
          // the shadow caster region, and as such it doesn't cast a shadow)
          if (shadow.leftEdge === null && shadow.rightEdge === null) {
            continue;
          }

          // If both shadow edges are not pointing up then this shadow doesn't
          // cast on this wall
          if (
            shadow.leftEdge &&
            shadow.leftEdge.start.y <= shadow.leftEdge.end.y &&
            shadow.rightEdge &&
            shadow.rightEdge.start.y <= shadow.rightEdge.end.y
          ) {
            continue;
          }

          // Check if this wall's lower edge is below the shadow caster's
          // lower edge. If so, the caster doesn't cast a shadow on this wall
          if (wallInterval.bottom > shadowCasterInterval.bottom) {
            continue;
          }

          let leftIntercept: [number, number] | null = null;
          if (
            shadow.leftEdge &&
            shadow.leftEdge.start.y > shadow.leftEdge.end.y
          ) {
            leftIntercept = lineYIntercept(
              shadow.leftEdge,
              wallInterval.bottom,
              false
            );
          }

          let rightIntercept: [number, number] | null = null;
          if (
            shadow.rightEdge &&
            shadow.rightEdge.start.y > shadow.rightEdge.end.y
          ) {
            rightIntercept = lineYIntercept(
              shadow.rightEdge,
              wallInterval.bottom,
              false
            );
          }

          // If only the top-right corner of the sprite shadow rectangle
          // intercepted the wall, then we'll need to find where the top-left
          // corner *would have* intercepted (allowAfter = true)
          if (
            shadow.rightEdge &&
            leftIntercept !== null &&
            rightIntercept === null
          ) {
            rightIntercept = lineYIntercept(
              shadow.rightEdge,
              wallInterval.bottom
            );
          }

          // Likewise, if only the top-left corner of the sprite shadow
          // rectangle intercepted the wall, then we'll need to find where the
          // top-left corner *would have* intercepted (allowAfter = true)
          if (
            shadow.leftEdge &&
            leftIntercept === null &&
            rightIntercept !== null
          ) {
            leftIntercept = lineYIntercept(
              shadow.leftEdge,
              wallInterval.bottom
            );
          }

          // Don't render a shadow if either intercept is missing (this can
          // happen if both shadow edges are pointing down)
          if (leftIntercept === null || rightIntercept === null) {
            continue;
          }

          // Don't render a shadow if the intercepts are the wrong way 'round
          // or the gap between them is 0
          // (not sure if this is possible, but just making sure)
          if (leftIntercept[INTERCEPT_X] >= rightIntercept[INTERCEPT_X]) {
            continue;
          }

          // Don't render the shadow if it's outside the wall boundaries
          if (
            leftIntercept[INTERCEPT_X] > wallInterval.right ||
            rightIntercept[INTERCEPT_X] < wallInterval.left
          ) {
            continue;
          }

          const t =
            (leftIntercept[INTERCEPT_T] + rightIntercept[INTERCEPT_T]) / 2 +
            Light.SPRITE_SHADOW_INTERCEPT_OFFSET;
          const l =
            (vec.len(vec.sub(shadow.leftEdge!.start, shadow.leftEdge!.end)) +
              vec.len(
                vec.sub(shadow.rightEdge!.start, shadow.rightEdge!.end)
              )) /
            2;
          const sourceHeight = shadowSprite.height * (1 - t);
          const destinationHeight =
            l * (1 - t) * Light.SPRITE_WALL_SHADOW_LENGTH_COEFFICIENT;

          this.wallLightContext.save();
          this.wallLightContext.beginPath();
          this.wallLightContext.rect(
            wallRectangle.position.x,
            wallRectangle.position.y,
            wallRectangle.size.x,
            wallRectangle.size.y
          );
          this.wallLightContext.clip();
          this.wallLightContext.drawImage(
            shadowSprite,
            0,
            0,
            shadowSprite.width,
            sourceHeight,
            leftIntercept[INTERCEPT_X],
            wallInterval.bottom - destinationHeight,
            rightIntercept[INTERCEPT_X] - leftIntercept[INTERCEPT_X],
            destinationHeight
          );
          this.wallLightContext.restore();
        }
      }
    }

    this.wallLightContext.restore();
  }

  private prepareWallCircleShadows(
    lightRectangle: Rectangle,
    circleShadows: Shadow<CircleShadowCaster>[],
    wallShadowReceivers: WallShadowReceiver[]
  ) {
    this.wallLightContext.save();
    this.wallLightContext.fillStyle = 'black';
    this.wallLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius - LightingSystem.WALL_LIGHTING_Y_OFFSET
    );

    for (const wall of wallShadowReceivers) {
      const wallRectangle = {
        position: wall.position,
        size: wall.size,
      };
      const wallInterval = rectangleToInterval(wallRectangle);

      // Check if this wall shadow receiver is in range of the light
      if (rectanglesIntersect(lightRectangle, wallRectangle)) {
        // If the wall doesn't receive light, it also doesn't receive
        // partial or full shadows
        if (!wall.receiveLight) {
          continue;
        }

        // Check each shadow to see if it occludes this wall
        for (const shadow of circleShadows) {
          // If the shadow doesn't have a position or size then it's not a
          // valid circle shadow
          if (!shadow.position || !shadow.size) {
            continue;
          }

          const shadowCasterRectangle = {
            position: shadow.caster.position,
            size: shadow.caster.size,
          };
          const shadowCasterInterval = rectangleToInterval(
            shadowCasterRectangle
          );

          // A shadow caster doesn't cast a shadow onto a receiver that
          // overlaps it
          if (rectanglesIntersect(wallRectangle, shadowCasterRectangle)) {
            continue;
          }

          // Check if this wall's lower edge is below the shadow caster's
          // lower edge. If so, the caster doesn't cast a shadow on this wall
          if (wallInterval.bottom > shadowCasterInterval.bottom) {
            continue;
          }

          const shadowRectangle = {
            position: vec.sub(shadow.position, vec.mul(shadow.size, 0.5)),
            size: shadow.size,
          };

          // Only cast this shadow if it overlaps the wall
          if (!rectanglesIntersect(wallRectangle, shadowRectangle)) {
            continue;
          }

          this.wallLightContext.save();
          this.wallLightContext.beginPath();
          this.wallLightContext.rect(
            wallRectangle.position.x,
            wallRectangle.position.y,
            wallRectangle.size.x,
            wallRectangle.size.y
          );
          this.wallLightContext.clip();
          this.wallLightContext.beginPath();
          this.wallLightContext.ellipse(
            shadow.position.x,
            shadow.position.y,
            shadow.size.x,
            shadow.size.y * Light.CIRCLE_WALL_SHADOW_HEIGHT_COEFFICIENT,
            0,
            0,
            Math.PI * 2
          );
          this.wallLightContext.globalAlpha = shadow.caster.alpha;
          this.wallLightContext.fill();
          this.wallLightContext.restore();
        }
      }
    }

    this.wallLightContext.restore();
  }

  private prepareRegionShadow(shadowCasterRectangle: Rectangle): {
    shadowCasterInterval: Interval2d;
    leftEdge: Line | null;
    rightEdge: Line | null;
    vertices: PolygonVertices;
  } {
    const lightPosition = vec.cpy(this.position);
    const lightRadius = this._radius;
    const shadowCasterInterval = rectangleToInterval(shadowCasterRectangle);
    const shadowCasterVertices = rectangleVertices(shadowCasterRectangle);
    const shadowEdges: Line[] = [];

    for (let i = 0; i < shadowCasterVertices.length; i++) {
      const previous = at(shadowCasterVertices, i - 1);
      const current = shadowCasterVertices[i];

      if (!lineIsFacing({ start: previous, end: current }, this.position)) {
        const vertex1 = vec.sub(previous, lightPosition);
        const vertex2 = vec.sub(current, lightPosition);
        shadowEdges.push(
          {
            start: previous,
            end: vec.add(
              previous,
              vec.mul(
                vec.nor(vertex1),
                Math.max(
                  Light.SHADOW_BUFFER,
                  lightRadius + Light.SHADOW_BUFFER - vec.len(vertex1)
                )
              )
            ),
          },
          {
            start: current,
            end: vec.add(
              current,
              vec.mul(
                vec.nor(vertex2),
                Math.max(
                  Light.SHADOW_BUFFER,
                  lightRadius + Light.SHADOW_BUFFER - vec.len(vertex2)
                )
              )
            ),
          }
        );
      }
    }

    let leftEdge: Line | null = null;
    let rightEdge: Line | null = null;
    const shadowPolygon: PolygonVertices = [];
    switch (sector2d(this.position, shadowCasterInterval)) {
      case Sector2d.TopLeft:
        if (shadowEdges.length !== 4) {
          break;
        }

        leftEdge = shadowEdges[0];
        rightEdge = shadowEdges[3];
        shadowPolygon.push(
          shadowEdges[0].start,
          shadowEdges[0].end,
          vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
          shadowEdges[3].end,
          shadowEdges[3].start,
          shadowEdges[2].start
        );
        break;

      case Sector2d.Top:
        if (shadowEdges.length !== 6) {
          break;
        }

        leftEdge = shadowEdges[2];
        rightEdge = shadowEdges[1];
        shadowPolygon.push(
          shadowEdges[2].start,
          shadowEdges[2].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + Light.SHADOW_BUFFER,
              vec.rad(vec.sub(shadowEdges[2].end, shadowEdges[2].start)),
              vec.rad(vec.sub(shadowEdges[1].end, shadowEdges[1].start)),
              false
            );
          },
          shadowEdges[1].start,
          shadowEdges[5].start,
          shadowEdges[4].start
        );
        break;

      case Sector2d.TopRight:
        if (shadowEdges.length !== 4) {
          break;
        }

        leftEdge = shadowEdges[2];
        rightEdge = shadowEdges[1];
        shadowPolygon.push(
          shadowEdges[2].start,
          shadowEdges[2].end,
          vec(shadowEdges[1].end.x, shadowEdges[2].end.y),
          shadowEdges[1].end,
          shadowEdges[1].start,
          shadowEdges[3].start
        );
        break;

      case Sector2d.Left:
        if (shadowEdges.length !== 6) {
          break;
        }

        leftEdge = shadowEdges[0];
        rightEdge = shadowEdges[5];
        shadowPolygon.push(
          shadowEdges[0].start,
          shadowEdges[0].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + Light.SHADOW_BUFFER,
              vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
              vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
              false
            );
          },
          shadowEdges[5].start,
          shadowEdges[4].start,
          shadowEdges[2].start
        );
        break;

      case Sector2d.Inside:
        break;

      case Sector2d.Right:
        if (shadowEdges.length !== 6) {
          break;
        }

        leftEdge = shadowEdges[4];
        rightEdge = shadowEdges[3];
        shadowPolygon.push(
          shadowEdges[4].start,
          shadowEdges[4].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + Light.SHADOW_BUFFER,
              vec.rad(vec.sub(shadowEdges[4].end, shadowEdges[4].start)),
              vec.rad(vec.sub(shadowEdges[3].end, shadowEdges[3].start)),
              false
            );
          },
          shadowEdges[3].start,
          shadowEdges[2].start,
          shadowEdges[5].start
        );
        break;

      case Sector2d.BottomLeft:
        if (shadowEdges.length !== 4) {
          break;
        }

        leftEdge = shadowEdges[0];
        rightEdge = shadowEdges[3];
        shadowPolygon.push(
          shadowEdges[0].start,
          shadowEdges[0].end,
          vec(shadowEdges[3].end.x, shadowEdges[0].end.y),
          shadowEdges[3].end,
          shadowEdges[3].start,
          shadowEdges[2].start
        );
        break;

      case Sector2d.Bottom:
        if (shadowEdges.length !== 6) {
          break;
        }

        leftEdge = shadowEdges[0];
        rightEdge = shadowEdges[5];
        shadowPolygon.push(
          shadowEdges[0].start,
          shadowEdges[0].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + Light.SHADOW_BUFFER,
              vec.rad(vec.sub(shadowEdges[0].end, shadowEdges[0].start)),
              vec.rad(vec.sub(shadowEdges[5].end, shadowEdges[5].start)),
              false
            );
          },
          shadowEdges[5].start,
          shadowEdges[4].start,
          shadowEdges[2].start
        );
        break;

      case Sector2d.BottomRight:
        if (shadowEdges.length !== 4) {
          break;
        }

        leftEdge = shadowEdges[0];
        rightEdge = shadowEdges[3];
        shadowPolygon.push(
          shadowEdges[0].start,
          shadowEdges[0].end,
          vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
          shadowEdges[3].end,
          shadowEdges[3].start,
          shadowEdges[2].start
        );
        break;
    }

    return {
      shadowCasterInterval,
      leftEdge,
      rightEdge,
      vertices: shadowPolygon,
    };
  }
}
