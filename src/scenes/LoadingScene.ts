import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import SceneManager, {
  Scene,
  SceneTransitionState,
} from '@basementuniverse/scene-manager';
import { vec } from '@basementuniverse/vec';
import * as content from '../../content/content.json';
import * as constants from '../constants';
import Game from '../Game';
import { ProgressBar } from '../ProgressBar';
import { LightingScene } from './LightingScene';

export default class LoadingScene extends Scene {
  private static readonly TRANSITION_TIME: number = 0.5;
  private static readonly COOLDOWN_TIME: number = 2.5;

  private finishedLoadingContent: boolean;
  private progressBar: ProgressBar;
  private cooldownTime: number = 0;

  public constructor() {
    super({
      transitionTime: LoadingScene.TRANSITION_TIME,
    });
  }

  public initialise() {
    this.finishedLoadingContent = false;
    this.progressBar = new ProgressBar(
      vec.map(vec.mul(Game.screen, 1 / 2), Math.floor),
      vec(200, 40)
    );
    this.cooldownTime = LoadingScene.COOLDOWN_TIME;

    ContentManager.load(content)
      .then(() => {
        this.finishedLoadingContent = true;
      })
      .catch((error: string) => {
        constants.DEBUG && console.log(`Unable to load content: ${error}`);
      });
  }

  public update(dt: number) {
    this.progressBar.position = vec.map(
      vec.mul(Game.screen, 1 / 2),
      Math.floor
    );
    this.progressBar.progress = ContentManager.progress;
    this.progressBar.update(dt);

    if (this.finishedLoadingContent) {
      this.cooldownTime -= dt;
    }

    if (this.cooldownTime <= 0) {
      SceneManager.pop();
      SceneManager.push(new LightingScene());
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    if (this.transitionState !== SceneTransitionState.None) {
      context.globalAlpha = this.transitionAmount;
    }

    this.progressBar.draw(context);

    Debug.draw(context);

    context.restore();
  }
}
