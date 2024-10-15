import { vec } from '@basementuniverse/vec';

/**
 * An object that receives shadows
 */
export interface ShadowReceiver {
  id: string;
  position: vec;
  size: vec;
}
