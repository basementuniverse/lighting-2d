/**
 * An object that has a specular map
 */
export interface SpecularMappable {
  drawSpecularMap(context: CanvasRenderingContext2D): void;
}
