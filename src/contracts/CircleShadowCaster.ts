import { vec } from '@basementuniverse/vec';
import { ShadowCaster } from './ShadowCaster';

/**
 * An object that casts a circular shadow
 */
export interface CircleShadowCaster extends ShadowCaster {
  anchor: vec;
  minShadowDistance: number;
  maxShadowDistance: number | null;
  alpha: number;
}
