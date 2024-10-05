import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec } from '@basementuniverse/vec';
import * as dat from 'dat.gui';
import * as constants from './constants';
import { LightingScene } from './LightingScene';
import { TestScene } from './TestScene';

export default class Game {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private lastFrameTime: number;
  private lastFrameCountTime: number;
  private frameRate: number = 0;
  private frameCount: number = 0;

  private scene: TestScene | LightingScene | null = null;

  public static screen: vec;
  public static gui: dat.GUI;

  public constructor(container: HTMLElement | null) {
    if (container === null) {
      throw new Error('A valid container element must be specified.');
    }
    if (container.tagName.toLowerCase() !== 'canvas') {
      throw new Error('Container element must be a canvas.');
    }
    this.canvas = container as HTMLCanvasElement;

    // Get a 2d context
    const context = this.canvas.getContext('2d');
    if (context !== null) {
      this.context = context;
    } else {
      throw new Error("Couldn't get a 2d context.");
    }

    // Handle resize
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public initialise() {
    // Initialise subsystems
    Debug.initialise();
    InputManager.initialise();
    Game.gui = new dat.GUI();

    // Start game loop
    this.lastFrameTime = this.lastFrameCountTime = performance.now();
    this.loop();

    // Initialise scene
    this.scene = new LightingScene();
    // this.scene = new TestScene();
    this.scene.initialise();
  }

  private loop() {
    const now = performance.now();
    const elapsedTime = Math.min(now - this.lastFrameTime, constants.FPS_MIN);

    // Calculate framerate
    if (now - this.lastFrameCountTime >= 1000) {
      this.lastFrameCountTime = now;
      this.frameRate = this.frameCount;
      this.frameCount = 0;
    }
    this.frameCount++;
    this.lastFrameTime = now;

    Debug.value('FPS', this.frameRate);

    // Do game loop
    this.update(elapsedTime);
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(dt: number) {
    Game.screen = vec(this.canvas.width, this.canvas.height);

    if (this.scene) {
      this.scene.update(dt);
    }

    InputManager.update(); // Input manager should be updated last
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.scene) {
      this.scene.draw(this.context);
    }

    Debug.draw(this.context);
  }
}
