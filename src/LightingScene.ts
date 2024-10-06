import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
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

  private mode:
    | 'nolighting'
    | 'normal'
    | 'groundmask'
    | 'wallmask'
    | 'groundmaskedlightmap'
    | 'wallmaskedlightmap'
    | 'lightmap' = 'normal';

  public initialise() {
    this.lightingSystem = new LightingSystem();
    this.lightingSystem.initialise();

    Game.gui.add({ click: () => this.save() }, 'click').name('Save');
    Game.gui.add({ click: () => this.load() }, 'click').name('Load');
    Game.gui
      .add({ click: () => (this.mode = 'nolighting') }, 'click')
      .name('No lighting');
    Game.gui
      .add({ click: () => (this.mode = 'normal') }, 'click')
      .name('Normal');
    Game.gui
      .add({ click: () => (this.mode = 'groundmask') }, 'click')
      .name('Ground mask');
    Game.gui
      .add({ click: () => (this.mode = 'wallmask') }, 'click')
      .name('Wall mask');
    Game.gui
      .add({ click: () => (this.mode = 'groundmaskedlightmap') }, 'click')
      .name('Ground-masked lightmap');
    Game.gui
      .add({ click: () => (this.mode = 'wallmaskedlightmap') }, 'click')
      .name('Wall-masked lightmap');
    Game.gui
      .add({ click: () => (this.mode = 'lightmap') }, 'click')
      .name('Light map');
    Game.gui.add(this.lightingSystem, 'ambientLightColour').listen();
  }

  private save() {
    localStorage.setItem(
      'lighting_demo_test_state',
      JSON.stringify({
        ambientLightColour: this.lightingSystem.ambientLightColour,
        groundShadowReceivers: this.groundShadowReceivers.map(g =>
          g.serialise()
        ),
        wallShadowReceivers: this.wallShadowReceivers.map(w => w.serialise()),
        regionShadowCasters: this.regionShadowCasters.map(r => r.serialise()),
        spriteShadowCasters: this.spriteShadowCasters.map(s => s.serialise()),
        circleShadowCasters: this.circleShadowCasters.map(c => c.serialise()),
        lights: this.lightingSystem.lights.map(l => l.serialise()),
      })
    );
  }

  private load() {
    const stateData = localStorage.getItem('lighting_demo_test_state');
    if (!stateData) {
      return;
    }

    let state;
    try {
      state = JSON.parse(stateData);
    } catch (e) {
      console.error('State data is invalid');
      return;
    }

    this.lightingSystem.ambientLightColour = state.ambientLightColour;

    this.groundShadowReceivers.forEach(g => g.destroy());
    this.groundShadowReceivers = state.groundShadowReceivers.map((g: any) =>
      GroundShadowReceiver.deserialise(g)
    );

    this.wallShadowReceivers.forEach(w => w.destroy());
    this.wallShadowReceivers = state.wallShadowReceivers.map((w: any) =>
      WallShadowReceiver.deserialise(w)
    );

    this.regionShadowCasters.forEach(r => r.destroy());
    this.regionShadowCasters = state.regionShadowCasters.map((r: any) =>
      RegionShadowCaster.deserialise(r)
    );

    this.spriteShadowCasters.forEach(s => s.destroy());
    this.spriteShadowCasters = state.spriteShadowCasters.map((s: any) =>
      SpriteShadowCaster.deserialise(s)
    );

    this.circleShadowCasters.forEach(c => c.destroy());
    this.circleShadowCasters = state.circleShadowCasters.map((c: any) =>
      CircleShadowCaster.deserialise(c)
    );

    this.lightingSystem.lights.forEach(light => light.destroy());
    this.lightingSystem.lights = state.lights.map((light: any) =>
      Light.deserialise(light)
    );
  }

  public update(dt: number) {
    Debug.value('Press SHIFT-L to create a new Light', '');
    Debug.value('Press SHIFT-G to create a new GroundShadowReceiver', '');
    Debug.value('Press SHIFT-W to create a new WallShadowReceiver', '');
    Debug.value('Press SHIFT-R to create a new RegionShadowCaster', '');
    Debug.value('Press SHIFT-S to create a new SpriteShadowCaster', '');
    Debug.value('Press SHIFT-C to create a new CircleShadowCaster', '');
    Debug.value('CTRL-drag to resize', '');

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
    if (InputManager.keyDown('ShiftLeft')) {
      // Create GroundShadowReceiver
      if (InputManager.keyPressed('KeyG')) {
        this.groundShadowReceivers.push(
          new GroundShadowReceiver({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyW')) {
        this.wallShadowReceivers.push(
          new WallShadowReceiver({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyR')) {
        this.regionShadowCasters.push(
          new RegionShadowCaster({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyS')) {
        this.spriteShadowCasters.push(
          new SpriteShadowCaster({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
      }

      // Create WallShadowReceiver
      if (InputManager.keyPressed('KeyC')) {
        this.circleShadowCasters.push(
          new CircleShadowCaster({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
      }

      // Create light
      if (InputManager.keyPressed('KeyL')) {
        this.lightingSystem.lights.push(
          new Light({
            position: vec.cpy(InputManager.mousePosition),
          })
        );
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
    context.save();

    switch (this.mode) {
      case 'nolighting':
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));
        break;

      case 'normal':
        this.groundShadowReceivers.forEach(g => g.draw(context));
        this.wallShadowReceivers.forEach(w => w.draw(context));

        this.lightingSystem.prepare(
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

    context.restore();
  }
}
