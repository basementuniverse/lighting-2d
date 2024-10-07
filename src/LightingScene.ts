import Camera from '@basementuniverse/camera';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { CircleShadowCaster } from './CircleShadowCaster';
import Game from './Game';
import { GroundShadowReceiver } from './GroundShadowReceiver';
import { Light } from './Light';
import { LightingSystem } from './LightingSystem';
import { RegionShadowCaster } from './RegionShadowCaster';
import { SpriteShadowCaster } from './SpriteShadowCaster';
import { WallShadowReceiver } from './WallShadowReceiver';

export class LightingScene {
  public static readonly GRID_SIZE = 20;
  public static readonly SPRITES: { [key: string]: HTMLImageElement } = {};
  private static readonly CAMERA_SPEED: number = 100;
  private static readonly CAMERA_INITIAL_POSITION: vec = vec(1000, 600);

  public camera: Camera;
  public lightingSystem: LightingSystem;

  private groundShadowReceivers: GroundShadowReceiver[] = [];
  private wallShadowReceivers: WallShadowReceiver[] = [];
  private regionShadowCasters: RegionShadowCaster[] = [];
  private spriteShadowCasters: SpriteShadowCaster[] = [];
  private circleShadowCasters: CircleShadowCaster[] = [];

  private selected:
    | GroundShadowReceiver
    | WallShadowReceiver
    | RegionShadowCaster
    | SpriteShadowCaster
    | CircleShadowCaster
    | Light
    | null = null;

  public mode:
    | 'nolighting'
    | 'normal'
    | 'groundmask'
    | 'wallmask'
    | 'groundmaskedlightmap'
    | 'wallmaskedlightmap'
    | 'lightmap' = 'normal';

  public initialise() {
    this.camera = new Camera(vec(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = LightingScene.CAMERA_INITIAL_POSITION;

    this.lightingSystem = new LightingSystem();
    this.lightingSystem.initialise();

    Game.gui
      .add({ click: () => this.store() }, 'click')
      .name('Save to local storage');
    Game.gui
      .add({ click: () => this.retrieve() }, 'click')
      .name('Load from local storage');
    Game.gui
      .add({ click: () => this.export() }, 'click')
      .name('Export state to JSON');
    Game.gui
      .add({ click: () => this.import() }, 'click')
      .name('Import state from JSON');
    Game.gui
      .add(this, 'mode', [
        'nolighting',
        'normal',
        'groundmask',
        'wallmask',
        'groundmaskedlightmap',
        'wallmaskedlightmap',
        'lightmap',
      ])
      .name('Mode');
    Game.gui
      .add(
        {
          click: () => {
            this.wallShadowReceivers = LightingSystem.mergeWallShadowReceivers(
              this,
              this.wallShadowReceivers
            );

            this.regionShadowCasters = LightingSystem.mergeRegionShadowCasters(
              this,
              this.regionShadowCasters
            );
          },
        },
        'click'
      )
      .name('Optimise');
    Game.gui.add(this.lightingSystem, 'ambientLightColour').listen();

    const testSpriteImage = new Image();
    testSpriteImage.src = '../images/test-sprite.png';
    testSpriteImage.onload = () => {
      LightingScene.SPRITES['test-sprite'] = testSpriteImage;
    };

    const testShadowImage = new Image();
    testShadowImage.src = '../images/test-shadow.png';
    testShadowImage.onload = () => {
      LightingScene.SPRITES['test-shadow'] = testShadowImage;
    };
  }

  private store() {
    localStorage.setItem('lighting_demo_test_state', this.save());
  }

  private retrieve() {
    const data = localStorage.getItem('lighting_demo_test_state');
    if (!data) {
      return;
    }

    this.load(data);
  }

  private export() {
    console.log(this.save());
  }

  private import() {
    const data = prompt('Paste state data here:');
    if (data) {
      this.load(data);
    }
  }

  private save(): string {
    return JSON.stringify({
      ambientLightColour: this.lightingSystem.ambientLightColour,
      groundShadowReceivers: this.groundShadowReceivers.map(g => g.serialise()),
      wallShadowReceivers: this.wallShadowReceivers.map(w => w.serialise()),
      regionShadowCasters: this.regionShadowCasters.map(r => r.serialise()),
      spriteShadowCasters: this.spriteShadowCasters.map(s => s.serialise()),
      circleShadowCasters: this.circleShadowCasters.map(c => c.serialise()),
      lights: this.lightingSystem.lights.map(l => l.serialise()),
    });
  }

  private load(data: string) {
    let state;
    try {
      state = JSON.parse(data);
    } catch (e) {
      console.error('State data is invalid');
      return;
    }

    this.lightingSystem.ambientLightColour = state.ambientLightColour;

    this.groundShadowReceivers.forEach(g => g.destroy());
    this.groundShadowReceivers = state.groundShadowReceivers.map((g: any) =>
      GroundShadowReceiver.deserialise(this, g)
    );

    this.wallShadowReceivers.forEach(w => w.destroy());
    this.wallShadowReceivers = state.wallShadowReceivers.map((w: any) =>
      WallShadowReceiver.deserialise(this, w)
    );

    this.regionShadowCasters.forEach(r => r.destroy());
    this.regionShadowCasters = state.regionShadowCasters.map((r: any) =>
      RegionShadowCaster.deserialise(this, r)
    );

    this.spriteShadowCasters.forEach(s => s.destroy());
    this.spriteShadowCasters = state.spriteShadowCasters.map((s: any) =>
      SpriteShadowCaster.deserialise(this, s)
    );

    this.circleShadowCasters.forEach(c => c.destroy());
    this.circleShadowCasters = state.circleShadowCasters.map((c: any) =>
      CircleShadowCaster.deserialise(this, c)
    );

    this.lightingSystem.lights.forEach(light => light.destroy());
    this.lightingSystem.lights = state.lights.map((light: any) =>
      Light.deserialise(this, light)
    );
  }

  public update(dt: number) {
    const cameraBounds = this.camera.bounds;

    Debug.value(
      'Camera position',
      vec.str(vec.map(this.camera.position, v => v.toFixed(2)))
    );
    Debug.value('Camera scale', this.camera.scale.toFixed(2));
    Debug.value(
      'Camera bounds',
      `top=${Math.floor(cameraBounds.top)} left=${Math.floor(
        cameraBounds.left
      )} bottom=${Math.floor(cameraBounds.bottom)} right=${Math.floor(
        cameraBounds.right
      )}`
    );
    Debug.value('Press SHIFT-L to create a new Light', '');
    Debug.value('Press SHIFT-G to create a new GroundShadowReceiver', '');
    Debug.value('Press SHIFT-W to create a new WallShadowReceiver', '');
    Debug.value('Press SHIFT-R to create a new RegionShadowCaster', '');
    Debug.value('Press SHIFT-S to create a new SpriteShadowCaster', '');
    Debug.value('Press SHIFT-C to create a new CircleShadowCaster', '');
    Debug.value('Press D to duplicate selected', '');
    Debug.value('CTRL-drag to resize', '');
    Debug.value('Hold SHIFT while moving or resizing to snap to grid', '');

    // Handle camera move
    const cameraMoveVector = vec();
    if (InputManager.keyDown('ArrowUp')) {
      cameraMoveVector.y--;
    }
    if (InputManager.keyDown('ArrowDown')) {
      cameraMoveVector.y++;
    }
    if (InputManager.keyDown('ArrowLeft')) {
      cameraMoveVector.x--;
    }
    if (InputManager.keyDown('ArrowRight')) {
      cameraMoveVector.x++;
    }

    this.camera.position = vec.add(
      this.camera.position,
      vec.mul(cameraMoveVector, LightingScene.CAMERA_SPEED * dt)
    );

    // Handle camera zoom
    if (InputManager.keyDown('ShiftLeft')) {
      if (InputManager.mouseWheelUp()) {
        this.camera.scale += 0.1;
      }
      if (InputManager.mouseWheelDown()) {
        this.camera.scale -= 0.1;
      }
    }
    this.camera.update(Game.screen);

    this.groundShadowReceivers.forEach(ground => ground.update(dt));
    this.wallShadowReceivers.forEach(wall => wall.update(dt));

    this.regionShadowCasters.forEach(region => region.update(dt));
    this.spriteShadowCasters.forEach(sprite => sprite.update(dt));
    this.circleShadowCasters.forEach(circle => circle.update(dt));

    this.lightingSystem.update(dt);

    // y-sorting
    this.groundShadowReceivers = this.groundShadowReceivers.sort(
      (a, b) => a.position.y + a.size.y - (b.position.y + b.size.y)
    );
    this.wallShadowReceivers = this.wallShadowReceivers.sort(
      (a, b) => a.position.y + a.size.y - (b.position.y + b.size.y)
    );

    // Handle item select
    if (InputManager.mousePressed()) {
      let selectedGroundShadowReceiver =
        this.groundShadowReceivers.find(g => g.hovered) || null;
      let selectedWallShadowReceiver =
        this.wallShadowReceivers.find(w => w.hovered) || null;
      let selectedRegionShadowCaster =
        this.regionShadowCasters.find(r => r.hovered) || null;
      let selectedSpriteShadowCaster =
        this.spriteShadowCasters.find(s => s.hovered) || null;
      let selectedCircleShadowCaster =
        this.circleShadowCasters.find(c => c.hovered) || null;
      let selectedLight =
        this.lightingSystem.lights.find(light => light.hovered) || null;

      this.selected =
        selectedLight ||
        selectedWallShadowReceiver ||
        selectedRegionShadowCaster ||
        selectedSpriteShadowCaster ||
        selectedCircleShadowCaster ||
        selectedGroundShadowReceiver ||
        null;

      this.groundShadowReceivers.forEach(g => {
        g.selected = false;
      });
      this.wallShadowReceivers.forEach(w => {
        w.selected = false;
      });
      this.regionShadowCasters.forEach(r => {
        r.selected = false;
      });
      this.spriteShadowCasters.forEach(s => {
        s.selected = false;
      });
      this.circleShadowCasters.forEach(c => {
        c.selected = false;
      });
      this.lightingSystem.lights.forEach(light => {
        light.selected = false;
      });

      if (this.selected) {
        this.selected.selected = true;
      }
    }

    // Handle item create
    const mouseWorldPosition = this.camera.positionToWorld(
      InputManager.mousePosition
    );
    if (InputManager.keyDown('ShiftLeft')) {
      // Create GroundShadowReceiver
      if (InputManager.keyPressed('KeyG')) {
        this.groundShadowReceivers.push(
          new GroundShadowReceiver(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyW')) {
        this.wallShadowReceivers.push(
          new WallShadowReceiver(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyR')) {
        this.regionShadowCasters.push(
          new RegionShadowCaster(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyS')) {
        this.spriteShadowCasters.push(
          new SpriteShadowCaster(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyC')) {
        this.circleShadowCasters.push(
          new CircleShadowCaster(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create light
      if (InputManager.keyPressed('KeyL')) {
        this.lightingSystem.lights.push(
          new Light(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }
    }

    // Handle item duplicate
    if (InputManager.keyPressed('KeyD') && this.selected) {
      switch (this.selected.type) {
        case 'GroundShadowReceiver':
          this.groundShadowReceivers.push(
            GroundShadowReceiver.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'WallShadowReceiver':
          this.wallShadowReceivers.push(
            WallShadowReceiver.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'RegionShadowCaster':
          this.regionShadowCasters.push(
            RegionShadowCaster.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'SpriteShadowCaster':
          this.spriteShadowCasters.push(
            SpriteShadowCaster.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'CircleShadowCaster':
          this.circleShadowCasters.push(
            CircleShadowCaster.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'Light':
          this.lightingSystem.lights.push(
            Light.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;
      }
    }

    // Handle item delete
    if (InputManager.keyPressed('Delete') && this.selected) {
      switch (this.selected.type) {
        case 'GroundShadowReceiver':
          this.groundShadowReceivers = this.groundShadowReceivers.filter(
            g => g.id !== this.selected!.id
          );
          break;

        case 'WallShadowReceiver':
          this.wallShadowReceivers = this.wallShadowReceivers.filter(
            w => w.id !== this.selected!.id
          );
          break;

        case 'RegionShadowCaster':
          this.regionShadowCasters = this.regionShadowCasters.filter(
            r => r.id !== this.selected!.id
          );
          break;

        case 'SpriteShadowCaster':
          this.spriteShadowCasters = this.spriteShadowCasters.filter(
            s => s.id !== this.selected!.id
          );
          break;

        case 'CircleShadowCaster':
          this.circleShadowCasters = this.circleShadowCasters.filter(
            c => c.id !== this.selected!.id
          );
          break;

        case 'Light':
          this.lightingSystem.lights = this.lightingSystem.lights.filter(
            light => light.id !== this.selected!.id
          );
          break;
      }
      this.selected.destroy();
      this.selected = null;
    }
  }

  public draw(context: CanvasRenderingContext2D) {
    switch (this.mode) {
      case 'nolighting':
        context.save();
        this.camera.setTransforms(context);
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));
        context.restore();
        break;

      case 'normal':
        context.save();
        this.camera.setTransforms(context);
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));
        context.restore();

        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        this.lightingSystem.draw(context);
        break;

      case 'groundmask':
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.groundMaskCanvas, 0, 0);
        break;

      case 'wallmask':
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMaskCanvas, 0, 0);
        break;

      case 'groundmaskedlightmap':
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
        break;

      case 'wallmaskedlightmap':
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
        break;

      case 'lightmap':
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
        context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
        break;
    }

    context.save();
    this.camera.setTransforms(context);
    Debug.draw(context, Game.DEBUG_MODES[Game.debugMode].debugLevel);
    context.restore();
  }
}
