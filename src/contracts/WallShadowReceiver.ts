import { vec } from '@basementuniverse/vec';
import { WallShadowLayer } from '../types';
import { Mergeable } from './Mergeable';
import { ShadowReceiver } from './ShadowReceiver';

/**
 * An object that receives wall shadows
 */
export interface WallShadowReceiver
  extends ShadowReceiver,
    Mergeable<WallShadowReceiver> {
  receiveLight: boolean;
  surfaceNormal: vec;
  layer: WallShadowLayer;
  drawMask(context: CanvasRenderingContext2D): void;
}
