import { Mergeable } from './Mergeable';
import { ShadowCaster } from './ShadowCaster';

/**
 * An object that casts a polygonal shadow
 */
export interface RegionShadowCaster
  extends ShadowCaster,
    Mergeable<RegionShadowCaster> {
  includeRegionShadow: boolean;
}
