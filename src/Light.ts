import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { parseColor } from '@basementuniverse/parsecolor';
import { at, clamp, exclude, remap } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { CircleShadowCaster } from './CircleShadowCaster';
import Game from './Game';
import { GroundShadowReceiver } from './GroundShadowReceiver';
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
  lineYIntercept,
  overlap1d,
  polygon,
  rectanglesIntersect,
  rectangleToInterval,
  rectangleVertices,
  sector2d,
} from './utils';
import { WallShadowReceiver } from './WallShadowReceiver';

export class Light {
  private static readonly DEFAULT_RADIUS = 100;
  private static readonly DEFAULT_COLOUR = 'white';
  private static readonly DEFAULT_INTENSITY = 0.2;
  private static readonly HOVER_RADIUS = 20;
  private static readonly DEBUG_COLOUR = '#f50';
  private static readonly DEBUG_HOVER_COLOUR = '#f90';
  private static readonly MIN_RADIUS = 10;
  private static readonly MAX_RADIUS = 400;
  private static readonly SHADOW_BUFFER = 20;
  private static readonly WALL_LIGHT_CUTOFF_DISTANCE = 30;

  public readonly type = 'Light';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  private _radius: number = Light.DEFAULT_RADIUS;
  private _colour: string = Light.DEFAULT_COLOUR;
  public colourObject: Colour;
  private _intensity: number = Light.DEFAULT_INTENSITY;

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

  public constructor(data: Partial<Light> = {}) {
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
    };
  }

  public static deserialise(data: any): Light {
    return new Light(data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public update(dt: number) {
    this.hovered =
      vec.len(vec.sub(InputManager.mousePosition, this.position)) <
      Light.HOVER_RADIUS;

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
        this.radius = clamp(
          vec.len(vec.sub(InputManager.mousePosition, this.position)),
          Light.MIN_RADIUS,
          Light.MAX_RADIUS
        );
      } else {
        this.position = vec.sub(InputManager.mousePosition, this.dragOffset);
      }
    }

    Debug.border(`Light ${this.id} border`, '', this.position, {
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
      showLabel: false,
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

    // Render light onto ground light canvas
    this.groundLightCanvas.width = this.groundLightCanvas.height =
      this._radius * 2;
    this.groundLightContext.save();
    this.groundLightContext.drawImage(this.lightCanvas, 0, 0);

    // Subtract shadows from ground lightmap
    this.groundLightContext.fillStyle = 'black';
    this.groundLightContext.translate(
      -this.position.x + this._radius,
      -this.position.y + this._radius
    );

    // Bounding box for this light
    const lightRectangle = {
      position: vec.sub(this.position, vec(this._radius)),
      size: vec(this._radius * 2),
    };

    // Shadow metadata for each shadow
    const shadows: {
      // The entity that is casting this shadow
      caster: ShadowCaster;

      // The leftmost edge of the shadow (when pointing upwards)
      leftEdge: Line | null;

      // The rightmost edge of the shadow (when pointing upwards)
      rightEdge: Line | null;
    }[] = [];
    for (const caster of regionShadowCasters) {
      const casterRectangle = {
        position: caster.position,
        size: caster.size,
      };

      // Check if this wall is in range of the light
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

    // Render light onto wall light canvas
    this.wallLightCanvas.width = this.wallLightCanvas.height = this._radius * 2;
    this.wallLightContext.save();
    this.wallLightContext.drawImage(this.lightCanvas, 0, 0);

    // Subtract shadows from wall lightmap
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

        // Check each shadow to see if it fully or partially shadows this wall
        for (const shadow of shadows) {
          const shadowCasterInterval = rectangleToInterval({
            position: shadow.caster.position,
            size: shadow.caster.size,
          });

          // A shadow caster doesn't cast a shadow onto itself
          if (wall.id === shadow.caster.id) {
            continue;
          }

          // Check if this wall's lower edge is below the shadow caster's
          // lower edge (if it is, then the shadow won't cast onto this wall)
          if (wallInterval.bottom >= shadowCasterInterval.bottom) {
            continue;
          }

          // Check if this shadow has one or more edges (if it has no edges,
          // then they're probably both pointing in the wrong direction and
          // as such won't cast onto this wall)
          if (shadow.leftEdge === null && shadow.rightEdge === null) {
            continue;
          }

          // Find where the left and right edges of the shadow intercept the
          // lower edge of the receiving wall
          let leftIntercept: number | null = null;
          if (shadow.leftEdge) {
            leftIntercept = lineYIntercept(
              shadow.leftEdge,
              wallInterval.bottom
            );
          }

          let rightIntercept: number | null = null;
          if (shadow.rightEdge) {
            rightIntercept = lineYIntercept(
              shadow.rightEdge,
              wallInterval.bottom
            );
          }

          // Check if there are no intercepts (if there are no intercepts,
          // this means the shadow is pointing in the wrong direction and as
          // such won't cast onto this wall)
          if (leftIntercept === null && rightIntercept === null) {
            continue;
          }

          // Edge case: when the shadow caster is partially above and below
          // the shadow receiver and the shadow is pointing away from the
          // receiving wall, sometimes a shadow appears due to the intercept
          // being behind the start of the shadow
          if (shadowCasterInterval.top < wallInterval.bottom) {
            // Shadow caster is to the left of shadow receiver
            if (
              shadowCasterInterval.right < wallInterval.left &&
              rightIntercept &&
              shadow.rightEdge &&
              rightIntercept > shadow.rightEdge.start.x &&
              shadow.rightEdge.start.x > shadow.rightEdge.end.x
            ) {
              continue;
            }

            // Shadow caster is to the right of shadow receiver
            if (
              shadowCasterInterval.left > wallInterval.right &&
              leftIntercept &&
              shadow.leftEdge &&
              leftIntercept < shadow.leftEdge.start.x &&
              shadow.leftEdge.start.x < shadow.leftEdge.end.x
            ) {
              continue;
            }
          }

          const min = Math.max(
            wallInterval.left,
            shadow.leftEdge
              ? lineYIntercept(shadow.leftEdge, wallInterval.bottom) ??
                  -Infinity
              : -Infinity
          );
          const max = Math.min(
            wallInterval.right,
            shadow.rightEdge
              ? lineYIntercept(shadow.rightEdge, wallInterval.bottom) ??
                  Infinity
              : Infinity
          );

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

  private lineIsFacing(line: Line): boolean {
    const edge = vec.nor(vec.sub(line.end, line.start));
    const edgeNormal = vec(edge.y, -edge.x);
    const lightNormal = vec.nor(
      vec.sub(vec.mul(vec.add(line.start, line.end), 0.5), this.position)
    );

    return vec.dot(lightNormal, edgeNormal) <= 0;
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

      if (!this.lineIsFacing({ start: previous, end: current })) {
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

        leftEdge = null;
        rightEdge = null;
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

        leftEdge = null;
        rightEdge = null;
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

        leftEdge = null;
        rightEdge = null;
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
        rightEdge = null;
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

        leftEdge = null;
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
