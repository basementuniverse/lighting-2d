import { vec } from '@basementuniverse/vec';
import Game from './Game';
import { v4 as uuid } from 'uuid';
import InputManager from '@basementuniverse/input-manager';
import { clamp, exclude } from '@basementuniverse/utils';
import Debug from '@basementuniverse/debug';
import { Colour } from './types';
import { parseColor } from '@basementuniverse/parsecolor';
import { colourToString } from './utils';

export class Light {
  private static readonly DEFAULT_RADIUS = 100;
  private static readonly DEFAULT_COLOUR = 'white';
  private static readonly DEFAULT_INTENSITY = 0.2;
  private static readonly HOVER_RADIUS = 20;
  private static readonly DEBUG_COLOUR = '#f50';
  private static readonly DEBUG_HOVER_COLOUR = '#f90';
  private static readonly MIN_RADIUS = 10;
  private static readonly MAX_RADIUS = 400;

  public readonly type = 'light';

  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec = vec();
  private _radius: number = Light.DEFAULT_RADIUS;
  private _colour: string = Light.DEFAULT_COLOUR;
  public colourObject: Colour;
  private _intensity: number = Light.DEFAULT_INTENSITY;

  public hovered = false;
  public selected = false;
  private dragging = false;
  private dragOffset: vec | null = null;

  public lightCanvas: HTMLCanvasElement;
  private lightContext: CanvasRenderingContext2D;

  private dirty = true;

  public constructor(data: Partial<Light> = {}) {
    Object.assign(
      this,
      exclude(data, 'radius', 'colour', 'intensity'),
      {
        id: data.id ?? uuid().split('-')[0],
        _radius: data.radius ?? Light.DEFAULT_RADIUS,
        _colour: data.colour ?? Light.DEFAULT_COLOUR,
        _intensity: data.intensity ?? Light.DEFAULT_INTENSITY,
      }
    );

    this.folder = Game.gui.addFolder(`Light ${this.id}`);
    this.folder.add(this, 'radius', Light.MIN_RADIUS, Light.MAX_RADIUS);
    this.folder.add(this, 'colour');
    this.folder.add(this, 'intensity', 0, 1);

    this.colourObject = parseColor(this._colour);

    this.lightCanvas = document.createElement('canvas');
    this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
    this.lightContext = this.lightCanvas.getContext('2d')!;
  }

  public get radius() {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
    this.dirty = true;
  }

  public get colour() {
    return this._colour;
  }

  public set colour(value: string) {
    this._colour = value;
    this.colourObject = parseColor(value);
    this.dirty = true;
  }

  public get intensity() {
    return this._intensity;
  }

  public set intensity(value: number) {
    this._intensity = value;
    this.dirty = true;
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      radius: this._radius,
      colour: this._colour,
      intensity: this._intensity,
    };
  }

  public static deserialise(data: any): Light {
    return new Light(data);
  }

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
    }
  }

  public update(dt: number) {
    this.hovered = vec.len(
      vec.sub(InputManager.mousePosition, this.position)
    ) < Light.HOVER_RADIUS;

    if (InputManager.mouseDown() && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec.sub(InputManager.mousePosition, this.position);
    }

    if (!InputManager.mouseDown()) {
      this.dragging = false;
      this.dragOffset = null;
    }

    if (this.selected && this.dragging && this.dragOffset) {
      if (InputManager.keyDown('ControlLeft')) {
        this.radius = clamp(
          vec.len(vec.sub(InputManager.mousePosition, this.position)),
          Light.MIN_RADIUS,
          Light.MAX_RADIUS
        );
      } else {
        this.position = vec.sub(InputManager.mousePosition, this.dragOffset);
      }
    }

    Debug.border(`${this.id}_border`, '', this.position, {
      showLabel: false,
      showValue: false,
      borderShape: 'circle',
      radius: this.radius,
      borderColour: (this.hovered || this.dragging)
        ? Light.DEBUG_HOVER_COLOUR
        : Light.DEBUG_COLOUR,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
    Debug.marker(`${this.id}_marker`, '', this.position, {
      markerColour: (this.hovered || this.dragging)
        ? Light.DEBUG_HOVER_COLOUR
        : Light.DEBUG_COLOUR,
    });
  }

  public draw() {
    if (this.dirty) {
      this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;

      this.lightContext.save();
      this.lightContext.fillStyle = 'black';
      this.lightContext.fillRect(
        0,
        0,
        this.lightCanvas.width,
        this.lightCanvas.height
      );

      const gradient = this.lightContext.createRadialGradient(
        this._radius,
        this._radius,
        this._radius * this._intensity,
        this._radius,
        this._radius,
        this._radius
      );
      gradient.addColorStop(0, colourToString(this.colourObject));
      gradient.addColorStop(1, 'black');

      this.lightContext.fillStyle = gradient;
      this.lightContext.beginPath();
      this.lightContext.arc(
        this._radius,
        this._radius,
        this._radius,
        0,
        Math.PI * 2
      );
      this.lightContext.fill();

      this.lightContext.restore();
    }
  }
}
