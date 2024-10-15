import { vec } from '@basementuniverse/vec';

/**
 * An object that casts a shadow
 */
export interface ShadowCaster {
  id: string;
  position: vec;
  size: vec;
}
