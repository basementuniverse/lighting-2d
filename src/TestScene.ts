import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { at } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import Game from './Game';
import { Light } from './Light';
import { Line, Rectangle, Sector2d } from './types';
import {
  lineInRectangle,
  lineYIntercept,
  polygon,
  rectangleToInterval,
  rectangleVertices,
  rectanglesIntersect,
  sector2d,
} from './utils';
import { Wall } from './Wall';

export class TestScene {
  private TEST_RECT: Rectangle = {
    position: vec(200, 200),
    size: vec(300, 200),
  };

  private TEST_Y = 700;

  private lineStart: vec | null = null;
  private lineEnd: vec | null = null;

  private wall1: Wall;
  private wall2: Wall;
  private light: Light;

  public initialise() {
    this.wall1 = new Wall({
      position: vec(200, 500),
      size: vec(100, 100),
    });
    this.wall2 = new Wall({
      position: vec(350, 500),
      size: vec(100, 100),
    });
    this.light = new Light({
      position: vec(300, 300),
      radius: 10,
    });
  }

  public update(dt: number) {
    Debug.value('A-click to set line start', '');
    Debug.value('B-click to set line end', '');
    Debug.value('CTRL-drag to resize', '');

    if (InputManager.mousePressed()) {
      if (InputManager.keyDown('KeyA')) {
        this.lineStart = vec.cpy(InputManager.mousePosition);
      }

      if (InputManager.keyDown('KeyB')) {
        this.lineEnd = vec.cpy(InputManager.mousePosition);
      }
    }

    this.wall1.update(dt);
    this.wall2.update(dt);
    this.light.update(dt);

    // Handle wall select
    if (InputManager.mousePressed()) {
      this.wall1.selected = false;
      this.wall2.selected = false;
      this.light.selected = false;

      if (this.wall1.hovered) {
        this.wall1.selected = true;
      } else if (this.wall2.hovered) {
        this.wall2.selected = true;
      } else if (this.light.hovered) {
        this.light.selected = true;
      }
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = 'white';
    context.fillRect(0, 0, Game.screen.x, Game.screen.y);

    // -------------------------------------------------------------------------
    // Test lineInRect
    // -------------------------------------------------------------------------
    // #region
    let t1: vec | null = null;
    if (this.lineStart && this.lineEnd) {
      t1 = lineInRectangle(
        {
          start: this.lineStart,
          end: this.lineEnd,
        },
        {
          position: this.TEST_RECT.position,
          size: this.TEST_RECT.size,
        }
      );
    }

    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.strokeRect(
      this.TEST_RECT.position.x,
      this.TEST_RECT.position.y,
      this.TEST_RECT.size.x,
      this.TEST_RECT.size.y
    );

    if (this.lineStart) {
      Debug.marker('start', '', this.lineStart);
    }

    if (this.lineEnd) {
      Debug.marker('end', '', this.lineEnd);
    }

    if (this.lineStart && this.lineEnd) {
      context.strokeStyle = 'red';
      this.line(context, this.lineStart, this.lineEnd);
      context.stroke();
    }

    if (t1 !== null) {
      Debug.marker('t1', '', t1);
    }
    // #endregion

    // -------------------------------------------------------------------------
    // Test lineSegmentYIntercept
    // -------------------------------------------------------------------------
    // #region
    let t2: number | null = null;
    if (this.lineStart && this.lineEnd) {
      t2 = lineYIntercept(
        {
          start: this.lineStart,
          end: this.lineEnd,
        },
        this.TEST_Y
      );
    }

    context.lineWidth = 1;
    context.strokeStyle = 'grey';
    this.line(context, vec(0, this.TEST_Y), vec(Game.screen.x, this.TEST_Y));
    context.stroke();

    if (t2) {
      Debug.marker('t2', '', vec(t2, this.TEST_Y));
    }
    // #endregion

    // -------------------------------------------------------------------------
    // Test rectInRect
    // -------------------------------------------------------------------------
    // #region
    this.wall1.draw(context);
    this.wall2.draw(context);

    Debug.value(
      'intersection',
      rectanglesIntersect(
        {
          position: this.wall1.position,
          size: this.wall1.size,
        },
        {
          position: this.wall2.position,
          size: this.wall2.size,
        }
      )
        ? 'yes'
        : 'no'
    );
    // #endregion

    // -------------------------------------------------------------------------
    // Test shadow volume casting on ground
    // -------------------------------------------------------------------------
    // #region
    const SHADOW_BUFFER = 20;
    const lightPosition = this.light.position;
    const lightRadius = this.light.radius;
    const wallPosition = this.wall1.position;
    const wallSize = this.wall1.size;
    const wallVertices = rectangleVertices({
      position: wallPosition,
      size: wallSize,
    });
    let leftEdge: Line | null = null;
    let rightEdge: Line | null = null;
    const shadowEdges: Line[] = [];
    for (let i = 0; i < wallVertices.length; i++) {
      const previous = at(wallVertices, i - 1);
      const current = wallVertices[i];

      if (!this.edgeIsFacingLight(lightPosition, previous, current)) {
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
                  SHADOW_BUFFER,
                  lightRadius + SHADOW_BUFFER - vec.len(vertex1)
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
                  SHADOW_BUFFER,
                  lightRadius + SHADOW_BUFFER - vec.len(vertex2)
                )
              )
            ),
          }
        );
      }

      const edge = vec.nor(vec.sub(current, previous));
      const edgeNormal = vec(edge.y, -edge.x);
      const lightNormal = vec.nor(
        vec.sub(vec.mul(vec.add(previous, current), 0.5), this.light.position)
      );
      // Check if edge is facing away from the light
      if (vec.dot(lightNormal, edgeNormal) > 0) {
        const t = vec.mul(vec.add(previous, current), 0.5);
        context.strokeStyle = 'yellow';
        context.lineWidth = 3;
        // this.line(context, previous, current);
        context.strokeStyle = 'blue';
        context.fillStyle = 'blue';
        // this.arrow(
        //   context,
        //   t,
        //   vec.add(t, vec.mul(edgeNormal, 10))
        // );
        const [a, b] = [previous, current];
        const aDelta = vec.sub(a, this.light.position);
        const bDelta = vec.sub(b, this.light.position);
        let v1 = vec(a);
        let v4 = vec(b);
        const v2 = vec.add(v1, vec.mul(aDelta, 1));
        const v3 = vec.add(v4, vec.mul(bDelta, 1));
        context.strokeStyle = 'red';
        context.lineWidth = 3;
        context.lineJoin = 'bevel';
        polygon(context, v1, v2, v3, v4);
        // context.stroke();
      }
    }

    for (const [i, line] of shadowEdges.entries()) {
      context.strokeStyle = 'grey';
      if (
        this.light.position.x > this.wall1.position.x &&
        this.light.position.y < this.wall1.position.y
      ) {
        if (i === 2) {
          context.strokeStyle = 'red';
        }
        if (i === 1) {
          context.strokeStyle = 'green';
        }
      } else if (
        this.light.position.x > this.wall1.position.x &&
        this.light.position.y < this.wall1.position.y + this.wall1.size.y
      ) {
        if (i === 4) {
          context.strokeStyle = 'red';
        }
        if (i === 3) {
          context.strokeStyle = 'green';
        }
      } else {
        if (i === 0) {
          context.strokeStyle = 'red';
        }
        if (i === shadowEdges.length - 1) {
          context.strokeStyle = 'green';
        }
      }
      context.lineWidth = 2;
      this.line(context, line.start, line.end);
      // Debug.marker(`line_${i}`, '', line.end);
      context.stroke();
    }

    switch (
      sector2d(
        lightPosition,
        rectangleToInterval({
          position: wallPosition,
          size: wallSize,
        })
      )
    ) {
      case Sector2d.TopLeft:
        if (shadowEdges.length !== 4) {
          break;
        }

        leftEdge = null;
        rightEdge = null;
        polygon(
          context,
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
        polygon(
          context,
          shadowEdges[2].start,
          shadowEdges[2].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + SHADOW_BUFFER,
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
        polygon(
          context,
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
        polygon(
          context,
          shadowEdges[0].start,
          shadowEdges[0].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + SHADOW_BUFFER,
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
        polygon(
          context,
          shadowEdges[4].start,
          shadowEdges[4].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + SHADOW_BUFFER,
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
        polygon(
          context,
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
        polygon(
          context,
          shadowEdges[0].start,
          shadowEdges[0].end,
          (context: CanvasRenderingContext2D) => {
            context.arc(
              lightPosition.x,
              lightPosition.y,
              lightRadius + SHADOW_BUFFER,
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
        polygon(
          context,
          shadowEdges[0].start,
          shadowEdges[0].end,
          vec(shadowEdges[0].end.x, shadowEdges[3].end.y),
          shadowEdges[3].end,
          shadowEdges[3].start,
          shadowEdges[2].start
        );
        break;
    }
    context.fillStyle = 'rgba(255, 255, 0, 0.5)';
    context.fill();
    // #endregion

    // -------------------------------------------------------------------------
    // Test shadow volume casting on wall
    // -------------------------------------------------------------------------
    const wall1Interval = rectangleToInterval({
      position: this.wall1.position,
      size: this.wall1.size,
    });
    const wall2Interval = rectangleToInterval({
      position: this.wall2.position,
      size: this.wall2.size,
    });

    if (wall1Interval.bottom > wall2Interval.bottom) {
      let rightIntercept: number | null = null;
      if (rightEdge) {
        rightIntercept = lineYIntercept(rightEdge, wall2Interval.bottom);
        if (rightIntercept) {
          Debug.marker(
            'right_intercept',
            '',
            vec(
              Math.max(rightIntercept, wall2Interval.left),
              wall2Interval.bottom
            )
          );
        }
      }

      let leftIntercept: number | null = null;
      if (leftEdge) {
        leftIntercept = lineYIntercept(leftEdge, wall2Interval.bottom);
        if (leftIntercept) {
          Debug.marker(
            'left_intercept',
            '',
            vec(
              Math.min(leftIntercept, wall2Interval.right),
              wall2Interval.bottom
            )
          );
        }
      }

      let show = true;

      if (!leftIntercept && !rightIntercept) {
        show = false;
      }

      // wall1 = shadow caster
      // wall2 = shadow receiver

      // shadow caster is partially above and below shadow receiver
      // edge case: shadow is pointing away from shadow receiver but the
      // shadow would still appear because the intercept is behind where the
      // shadow edge starts
      if (wall1Interval.top < wall2Interval.bottom) {
        // shadow caster is to the left of shadow receiver
        if (
          wall1Interval.right < wall2Interval.left &&
          rightIntercept &&
          rightEdge &&
          rightIntercept > rightEdge.start.x &&
          rightEdge.start.x > rightEdge.end.x
        ) {
          show = false;
        }

        // shadow caster is to the right of shadow receiver
        // edge case...
        if (
          wall1Interval.left > wall2Interval.right &&
          leftIntercept &&
          leftEdge &&
          leftIntercept < leftEdge.start.x &&
          leftEdge.start.x < leftEdge.end.x
        ) {
          show = false;
        }
      }

      const min = Math.max(
        wall2Interval.left,
        leftEdge
          ? lineYIntercept(leftEdge, wall2Interval.bottom) ?? -Infinity
          : -Infinity
      );
      const max = Math.min(
        wall2Interval.right,
        rightEdge
          ? lineYIntercept(rightEdge, wall2Interval.bottom) ?? Infinity
          : Infinity
      );

      // Debug.marker(
      //   'min',
      //   '',
      //   vec(min, wall2Interval.bottom)
      // );
      // Debug.marker(
      //   'max',
      //   '',
      //   vec(max, wall2Interval.bottom)
      // );

      // Don't render the shadow if it's got negative width
      if (min >= max) {
        show = false;
      }

      // Don't render the shadow if it's outside the wall boundaries
      if (min > wall2Interval.right || max < wall2Interval.left) {
        show = false;
      }

      if (show) {
        Debug.border(`wall_shadow`, '', vec(min, wall2Interval.top), {
          showLabel: false,
          showValue: false,
          size: vec(max - min, this.wall2.size.y),
          borderColour: 'purple',
          borderWidth: 3,
        });
      }
    }
  }

  private edgeIsFacingLight(
    lightPosition: vec,
    edgeA: vec,
    edgeB: vec
  ): boolean {
    const edge = vec.nor(vec.sub(edgeB, edgeA));
    const edgeNormal = vec(edge.y, -edge.x);
    const lightNormal = vec.nor(
      vec.sub(vec.mul(vec.add(edgeA, edgeB), 0.5), lightPosition)
    );

    return vec.dot(lightNormal, edgeNormal) <= 0;
  }

  private line(context: CanvasRenderingContext2D, a: vec, b: vec) {
    context.save();
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
    context.restore();
  }

  private arrow(context: CanvasRenderingContext2D, a: vec, b: vec) {
    this.line(context, a, b);
    const theta = Math.atan2(b.y - a.y, b.x - a.x);
    this.triangle(context, b, theta);
  }

  private triangle(
    context: CanvasRenderingContext2D,
    position: vec,
    theta: number
  ) {
    context.save();
    context.translate(position.x, position.y);
    context.rotate(theta);
    context.beginPath();
    context.moveTo(-5, -5);
    context.lineTo(10, 0);
    context.lineTo(-5, 5);
    context.closePath();
    context.fill();
    context.restore();
  }
}
