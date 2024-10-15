import { Mergeable } from './Mergeable';
import { ShadowReceiver } from './ShadowReceiver';

/**
 * An object that receives ground shadows
 */
export interface GroundShadowReceiver
  extends ShadowReceiver,
    Mergeable<GroundShadowReceiver> {
  drawMask(context: CanvasRenderingContext2D): void;
}
