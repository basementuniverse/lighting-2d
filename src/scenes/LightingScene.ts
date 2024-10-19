import Camera from '@basementuniverse/camera';
import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { Scene } from '@basementuniverse/scene-manager';
import { exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { CircleShadowCasterActor } from '../CircleShadowCasterActor';
import Game from '../Game';
import { GroundShadowReceiverActor } from '../GroundShadowReceiverActor';
import { Light } from '../Light';
import { LightingSystem } from '../LightingSystem';
import { RegionShadowCasterActor } from '../RegionShadowCasterActor';
import { SpriteShadowCasterActor } from '../SpriteShadowCasterActor';
import { WallShadowReceiverActor } from '../WallShadowReceiverActor';

enum LightingSceneRenderMode {
  NoLighting = 'nolighting',
  Normal = 'normal',
  GroundMask = 'groundmask',
  WallMask1 = 'wallmask1',
  WallMask2 = 'wallmask2',
  GroundMaskedLightMap = 'groundmaskedlightmap',
  WallMaskedLightMap1 = 'wallmaskedlightmap1',
  WallMaskedLightMap2 = 'wallmaskedlightmap2',
  SelectedLightMap = 'selected-light',
  SelectedGroundLightMap = 'selected-ground',
  SelectedWall1LightMap = 'selected-wall1',
  SelectedWall2LightMap = 'selected-wall2',
  SelectedNormalMapping = 'selected-normalmapping',
  LightMap = 'lightmap',
  SceneNormalMap = 'scenenormalmap',
}

export class LightingScene extends Scene {
  public static readonly GRID_SIZE = 16;

  private static readonly CAMERA_SPEED: number = 100;
  private static readonly CAMERA_INITIAL_POSITION: vec = vec(1000, 600);

  public camera: Camera;
  public lightingSystem: LightingSystem;

  private groundShadowReceivers: GroundShadowReceiverActor[] = [];
  private wallShadowReceivers: WallShadowReceiverActor[] = [];
  private regionShadowCasters: RegionShadowCasterActor[] = [];
  private spriteShadowCasters: SpriteShadowCasterActor[] = [];
  private circleShadowCasters: CircleShadowCasterActor[] = [];

  private selected:
    | GroundShadowReceiverActor
    | WallShadowReceiverActor
    | RegionShadowCasterActor
    | SpriteShadowCasterActor
    | CircleShadowCasterActor
    | Light
    | null = null;

  public mode: LightingSceneRenderMode = LightingSceneRenderMode.Normal;
  public showHelp: boolean = false;

  public initialise() {
    // Camera
    this.camera = new Camera(vec(), {
      minScale: 0.5,
      maxScale: 5,
      moveEaseAmount: 0.95,
      scaleEaseAmount: 0.95,
    });
    this.camera.positionImmediate = LightingScene.CAMERA_INITIAL_POSITION;

    // Lighting
    this.lightingSystem = new LightingSystem({
      imageSmoothingEnabled: false,
      softShadowsEnabled: true,
      softShadowsAmount: 2.5,
      normalMappingEnabled: true,
      normalMappingShader: ContentManager.get('normal-mapping-shader'),
    });
    this.lightingSystem.initialise();

    // GUI controls
    Game.gui
      .add(this, 'mode', Object.values(LightingSceneRenderMode))
      .name('Render mode');
    Game.gui.add(this, 'showHelp').name('Show help');
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
      .add(
        {
          click: () => {
            this.wallShadowReceivers = LightingSystem.merge(
              this.wallShadowReceivers,
              (a, b) =>
                a.colour === b.colour && a.receiveLight === b.receiveLight,
              this
            );

            this.regionShadowCasters = LightingSystem.merge(
              this.regionShadowCasters,
              undefined,
              this
            );
          },
        },
        'click'
      )
      .name('Optimise geometry');
    Game.gui
      .add(this.lightingSystem.options, 'imageSmoothingEnabled')
      .name('Image smoothing enabled')
      .onChange(value => {
        this.lightingSystem.options.imageSmoothingEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'softShadowsEnabled')
      .name('Soft shadows enabled')
      .onChange(value => {
        this.lightingSystem.options.softShadowsEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'softShadowsAmount')
      .name('Soft shadows amount')
      .onChange(value => {
        this.lightingSystem.options.softShadowsAmount = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'normalMappingEnabled')
      .name('Normal mapping enabled')
      .onChange(value => {
        this.lightingSystem.options.normalMappingEnabled = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'ambientLightColour')
      .name('Ambient light')
      .onChange(value => {
        this.lightingSystem.options.ambientLightColour = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'wallLightingYOffset')
      .name('Wall light Y offset')
      .onChange(value => {
        this.lightingSystem.options.wallLightingYOffset = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'wallLightingCutoffDistance')
      .name('Wall light cutoff distance')
      .onChange(value => {
        this.lightingSystem.options.wallLightingCutoffDistance = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'spriteWallShadowLengthFactor', 0, 1)
      .name('Sprite wall shadow length factor')
      .onChange(value => {
        this.lightingSystem.options.spriteWallShadowLengthFactor = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'spriteWallShadowInterceptOffset', 0, 1)
      .name('Sprite wall shadow intercept offset')
      .onChange(value => {
        this.lightingSystem.options.spriteWallShadowInterceptOffset = value;
      })
      .listen();
    Game.gui
      .add(this.lightingSystem.options, 'circleWallShadowLengthFactor', 0, 1)
      .name('Circle wall shadow length factor')
      .onChange(value => {
        this.lightingSystem.options.circleWallShadowLengthFactor = value;
      })
      .listen();
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
      options: this.lightingSystem.options,
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

    this.lightingSystem.options.imageSmoothingEnabled =
      state.options.imageSmoothingEnabled;
    this.lightingSystem.options.softShadowsEnabled =
      state.options.softShadowsEnabled;
    this.lightingSystem.options.softShadowsAmount =
      state.options.softShadowsAmount;
    this.lightingSystem.options.normalMappingEnabled =
      state.options.normalMappingEnabled;
    this.lightingSystem.options.ambientLightColour =
      state.options.ambientLightColour;
    this.lightingSystem.options.wallLightingYOffset =
      state.options.wallLightingYOffset;
    this.lightingSystem.options.wallLightingCutoffDistance =
      state.options.wallLightingCutoffDistance;
    this.lightingSystem.options.spriteWallShadowLengthFactor =
      state.options.spriteWallShadowLengthFactor;
    this.lightingSystem.options.spriteWallShadowInterceptOffset =
      state.options.spriteWallShadowInterceptOffset;
    this.lightingSystem.options.circleWallShadowLengthFactor =
      state.options.circleWallShadowLengthFactor;

    this.groundShadowReceivers.forEach(g => g.destroy());
    this.groundShadowReceivers = state.groundShadowReceivers.map((g: any) =>
      GroundShadowReceiverActor.deserialise(this, g)
    );

    this.wallShadowReceivers.forEach(w => w.destroy());
    this.wallShadowReceivers = state.wallShadowReceivers.map((w: any) =>
      WallShadowReceiverActor.deserialise(this, w)
    );

    this.regionShadowCasters.forEach(r => r.destroy());
    this.regionShadowCasters = state.regionShadowCasters.map((r: any) =>
      RegionShadowCasterActor.deserialise(this, r)
    );

    this.spriteShadowCasters.forEach(s => s.destroy());
    this.spriteShadowCasters = state.spriteShadowCasters.map((s: any) =>
      SpriteShadowCasterActor.deserialise(this, s)
    );

    this.circleShadowCasters.forEach(c => c.destroy());
    this.circleShadowCasters = state.circleShadowCasters.map((c: any) =>
      CircleShadowCasterActor.deserialise(this, c)
    );

    this.lightingSystem.lights.forEach(light => light.destroy());
    this.lightingSystem.lights = state.lights.map((light: any) =>
      Light.deserialise(this, this.lightingSystem, light)
    );
  }

  public update(dt: number) {
    const cameraBounds = this.camera.bounds;
    const mouseWorldPosition = this.camera.screenToWorld(
      InputManager.mousePosition
    );

    Debug.value(
      'Mouse world position',
      vec.str(vec.map(mouseWorldPosition, v => v.toFixed(2)))
    );
    Debug.value(
      'Camera',
      `pos ${vec.str(
        vec.map(this.camera.position, v => v.toFixed(2))
      )} scale ${this.camera.scale.toFixed(2)}`
    );
    Debug.value(
      'Camera bounds',
      `top=${Math.floor(cameraBounds.top)} left=${Math.floor(
        cameraBounds.left
      )} bottom=${Math.floor(cameraBounds.bottom)} right=${Math.floor(
        cameraBounds.right
      )}`
    );
    Debug.value('Selected', this.selected ? this.selected.id : 'none');

    if (this.showHelp) {
      Debug.value('Press SHIFT-L to create a new Light', '');
      Debug.value('Press SHIFT-G to create a new GroundShadowReceiver', '');
      Debug.value('Press SHIFT-W to create a new WallShadowReceiver', '');
      Debug.value('Press SHIFT-R to create a new RegionShadowCaster', '');
      Debug.value('Press SHIFT-S to create a new SpriteShadowCaster', '');
      Debug.value('Press SHIFT-C to create a new CircleShadowCaster', '');
      Debug.value('Press SHIFT-D to duplicate selected', '');
      Debug.value('Use arrow keys to move camera', '');
      Debug.value('SHIFT-mouse wheel to zoom camera', '');
      Debug.value('CTRL-drag to resize', '');
      Debug.value('Hold SHIFT to snap to grid', '');
    }

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

      Object.values(Game.gui.__folders).forEach(folder => {
        folder.domElement.classList.remove('selected');
      });

      if (this.selected) {
        this.selected.selected = true;

        Game.gui.__folders[
          `${this.selected.type} ${this.selected.id}`
        ].domElement.classList.add('selected');
      }
    }

    // Handle item create
    if (InputManager.keyDown('ShiftLeft')) {
      // Create GroundShadowReceiver
      if (InputManager.keyPressed('KeyG')) {
        this.groundShadowReceivers.push(
          new GroundShadowReceiverActor(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyW')) {
        this.wallShadowReceivers.push(
          new WallShadowReceiverActor(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyR')) {
        this.regionShadowCasters.push(
          new RegionShadowCasterActor(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyS')) {
        this.spriteShadowCasters.push(
          new SpriteShadowCasterActor(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyC')) {
        this.circleShadowCasters.push(
          new CircleShadowCasterActor(this, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }

      // Create Light
      if (InputManager.keyPressed('KeyL')) {
        this.lightingSystem.lights.push(
          new Light(this, this.lightingSystem, {
            position: vec.cpy(mouseWorldPosition),
          })
        );
      }
    }

    // Handle item duplicate
    if (
      InputManager.keyDown('ShiftLeft') &&
      InputManager.keyPressed('KeyD') &&
      this.selected
    ) {
      switch (this.selected.type) {
        case 'GroundShadowReceiver':
          this.groundShadowReceivers.push(
            GroundShadowReceiverActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'WallShadowReceiver':
          this.wallShadowReceivers.push(
            WallShadowReceiverActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'RegionShadowCaster':
          this.regionShadowCasters.push(
            RegionShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'SpriteShadowCaster':
          this.spriteShadowCasters.push(
            SpriteShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'CircleShadowCaster':
          this.circleShadowCasters.push(
            CircleShadowCasterActor.deserialise(this, {
              ...exclude(this.selected.serialise(), 'id', 'position'),
              position: vec.cpy(mouseWorldPosition),
            })
          );
          break;

        case 'Light':
          this.lightingSystem.lights.push(
            Light.deserialise(this, this.lightingSystem, {
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
    context.imageSmoothingEnabled = false;

    switch (this.mode) {
      case LightingSceneRenderMode.NoLighting:
        context.save();
        this.camera.setTransforms(context);
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));
        context.restore();
        break;

      case LightingSceneRenderMode.Normal:
        context.save();
        this.camera.setTransforms(context);
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));
        context.restore();

        this.lightingSystem.drawSceneNormalMap(this.camera, [
          ...this.groundShadowReceivers,
          ...this.wallShadowReceivers,
        ]);
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

      case LightingSceneRenderMode.GroundMask:
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

      case LightingSceneRenderMode.WallMask1:
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMask1Canvas, 0, 0);
        break;

      case LightingSceneRenderMode.WallMask2:
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMask2Canvas, 0, 0);
        break;

      case LightingSceneRenderMode.GroundMaskedLightMap:
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

      case LightingSceneRenderMode.WallMaskedLightMap1:
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMaskedLightMap1Canvas, 0, 0);
        break;

      case LightingSceneRenderMode.WallMaskedLightMap2:
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.wallMaskedLightMap2Canvas, 0, 0);
        break;

      case LightingSceneRenderMode.SelectedLightMap:
        if (!this.selected || this.selected.type !== 'Light') {
          break;
        }
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.save();
        this.camera.setTransforms(context);
        context.drawImage(
          this.selected.lightCanvas,
          this.selected.position.x - this.selected.radius,
          this.selected.position.y -
            this.selected.radius +
            this.lightingSystem.options.wallLightingYOffset
        );
        context.restore();
        break;

      case LightingSceneRenderMode.SelectedGroundLightMap:
        if (!this.selected || this.selected.type !== 'Light') {
          break;
        }
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.save();
        this.camera.setTransforms(context);
        context.drawImage(
          this.selected.groundLightCanvas,
          this.selected.position.x - this.selected.radius,
          this.selected.position.y - this.selected.radius
        );
        context.restore();
        break;

      case LightingSceneRenderMode.SelectedWall1LightMap:
        if (!this.selected || this.selected.type !== 'Light') {
          break;
        }
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.save();
        this.camera.setTransforms(context);
        context.drawImage(
          this.selected.wallLight1Canvas,
          this.selected.position.x - this.selected.radius,
          this.selected.position.y -
            this.selected.radius +
            this.lightingSystem.options.wallLightingYOffset
        );
        context.restore();
        break;

      case LightingSceneRenderMode.SelectedWall2LightMap:
        if (!this.selected || this.selected.type !== 'Light') {
          break;
        }
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.save();
        this.camera.setTransforms(context);
        context.drawImage(
          this.selected.wallLight2Canvas,
          this.selected.position.x - this.selected.radius,
          this.selected.position.y -
            this.selected.radius +
            this.lightingSystem.options.wallLightingYOffset
        );
        context.restore();
        break;

      case LightingSceneRenderMode.SelectedNormalMapping:
        if (!this.selected || this.selected.type !== 'Light') {
          break;
        }

        this.lightingSystem.drawSceneNormalMap(this.camera, [
          ...this.groundShadowReceivers,
          ...this.wallShadowReceivers,
        ]);
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.save();
        this.camera.setTransforms(context);
        context.drawImage(
          this.selected.normalMappingCanvas.domElement,
          this.selected.position.x - this.selected.radius,
          this.selected.position.y - this.selected.radius
        );
        context.restore();
        break;

      case LightingSceneRenderMode.LightMap:
        this.lightingSystem.prepare(
          this.camera,
          this.groundShadowReceivers,
          this.wallShadowReceivers,
          this.regionShadowCasters,
          this.spriteShadowCasters,
          this.circleShadowCasters
        );
        context.drawImage(this.lightingSystem.lightMapCanvas, 0, 0);
        break;

      case LightingSceneRenderMode.SceneNormalMap:
        this.lightingSystem.drawSceneNormalMap(this.camera, [
          ...this.groundShadowReceivers,
          ...this.wallShadowReceivers,
        ]);
        context.drawImage(this.lightingSystem.sceneNormalMapCanvas, 0, 0);
        break;
    }

    context.save();
    this.camera.setTransforms(context);
    Debug.draw(context, Game.DEBUG_MODES[Game.debugMode].debugLevel);
    context.restore();
  }
}
