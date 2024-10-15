import { vec } from '@basementuniverse/vec';
import { ShadowCaster } from './ShadowCaster';

/**
 * An object that casts a sprite shadow
 */
export interface SpriteShadowCaster extends ShadowCaster {
  shadow: HTMLImageElement | null;
  anchor: vec;
  offset: vec;
  minShadowLength: number;
  maxShadowLength: number | null;
}
