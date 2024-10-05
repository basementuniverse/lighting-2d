import { vec } from '@basementuniverse/vec';

export type Colour = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type Line = {
  start: vec;
  end: vec;
};

export type Interval1d = {
  start: number;
  end: number;
};

export type Interval2d = {
  top: number;
  bottom: number;
  right: number;
  left: number;
};

export enum Sector1d {
  Before = 'before',
  Inside = 'inside',
  After = 'after',
}

export enum Sector2d {
  TopLeft = 'top-left',
  Top = 'top',
  TopRight = 'top-right',
  Left = 'left',
  Inside = 'inside',
  Right = 'right',
  BottomLeft = 'bottom-left',
  Bottom = 'bottom',
  BottomRight = 'bottom-right',
}

export type Rectangle = {
  position: vec;
  size: vec;
};

type RegionShadowOptions = {
  type: 'region';
  region: Rectangle;
};

type SpriteShadowOptions = {
  type: 'sprite';
  sprite: any;
  offset?: number;
};

type CircleShadowOptions = {
  type: 'circle';
  radius: number;
  offset?: number;
};

export type ShadowOptions =
  | RegionShadowOptions
  | SpriteShadowOptions
  | CircleShadowOptions;

export type PolygonVertices = (
  | vec
  | ((context: CanvasRenderingContext2D) => void)
)[];
