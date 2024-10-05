import { clamp } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';

/**
 * Get the minimum of a set of vectors
 */
export function minVec(...vectors: vec[]): vec {
  return vectors.reduce(
    (min, v) => vec(Math.min(min.x, v.x), Math.min(min.y, v.y)),
    vec(Infinity, Infinity)
  );
}

/**
 * Get the maximum of a set of vectors
 */
export function maxVec(...vectors: vec[]): vec {
  return vectors.reduce(
    (max, v) => vec(Math.max(max.x, v.x), Math.max(max.y, v.y)),
    vec(-Infinity, -Infinity)
  );
}

/**
 * Clamp a vector between min and max
 */
export function clampVec(v: vec, min: vec, max: vec): vec {
  return vec(
    clamp(v.x, min.x, max.x),
    clamp(v.y, min.y, max.y)
  );
}

/**
 * Convert a colour object to a CSS string
 */
export function colourToString(
  colour: {
    r: number;
    g: number;
    b: number;
    a: number;
  }
): string {
  return `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`;
}

/**
 * Check if a point is inside an AABB
 */
export function pointInRect(
  p: vec,
  tl: vec,
  br: vec
): boolean {
  const min = minVec(tl, br);
  const max = maxVec(tl, br);

  return p.x >= min.x && p.x <= max.x && p.y >= min.y && p.y <= max.y;
}

/**
 * Check if a line segment a->b intersects with an AABB (tl->br) and return
 * the intersection position
 *
 * If the line segment does not intersect the rectangle, return null
 *
 * If the line begins inside the rectangle, return null
 */
export function lineInRect(
  a: vec,
  b: vec,
  tl: vec,
  br: vec
): vec | null {
  if (vec.eq(a, b)) {
    return null;
  }

  const min = minVec(tl, br);
  const max = maxVec(tl, br);

  if (a.x >= min.x && a.x <= max.x && a.y >= min.y && a.y <= max.y) {
    return null;
  }

  let tmin = (min.x - a.x) / (b.x - a.x);
  let tmax = (max.x - a.x) / (b.x - a.x);

  if (tmin > tmax) {
    [tmin, tmax] = [tmax, tmin];
  }

  let tymin = (min.y - a.y) / (b.y - a.y);
  let tymax = (max.y - a.y) / (b.y - a.y);

  if (tymin > tymax) {
    [tymin, tymax] = [tymax, tymin];
  }

  if (tmin > tymax || tymin > tmax) {
    return null;
  }

  if (tymin > tmin) {
    tmin = tymin;
  }

  if (tymax < tmax) {
    tmax = tymax;
  }

  return vec.add(a, vec.mul(vec.sub(b, a), tmin));
}
