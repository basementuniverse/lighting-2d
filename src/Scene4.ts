import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import Game from './Game';
import { Light } from './Light';
import { Wall } from './Wall';
import { vec } from '@basementuniverse/vec';
import { Ground } from './Ground';
import { LightingSystem } from './LightingSystem';

/**
 * Scene 4 - selectable, configurable, movable lights and objects
 */
export class Scene4 {
  public lightingSystem: LightingSystem;

  private walls: Wall[] = [];
  private grounds: Ground[] = [];

  private selected: Wall | Ground | Light | null = null;

  private mode:
    | 'nolighting'
    | 'normal'
    | 'lightmap'
    | 'groundmask'
    | 'wallmask'
    | 'groundmaskedlightmap'
    | 'wallmaskedlightmap' = 'normal';

  public initialise() {
    this.lightingSystem = new LightingSystem();
    this.lightingSystem.initialise();

    Game.gui.add(
      { click: () => this.save() },
      'click'
    ).name('Save');
    Game.gui.add(
      { click: () => this.load() },
      'click'
    ).name('Load');
    Game.gui.add(
      { click: () => this.mode = 'nolighting' },
      'click'
    ).name('No lighting');
    Game.gui.add(
      { click: () => this.mode = 'normal' },
      'click'
    ).name('Normal');
    Game.gui.add(
      { click: () => this.mode = 'lightmap' },
      'click'
    ).name('Light map');
    Game.gui.add(
      { click: () => this.mode = 'groundmask' },
      'click'
    ).name('Ground mask');
    Game.gui.add(
      { click: () => this.mode = 'wallmask' },
      'click'
    ).name('Wall mask');
    Game.gui.add(
      { click: () => this.mode = 'groundmaskedlightmap' },
      'click'
    ).name('Ground-masked lightmap');
    Game.gui.add(
      { click: () => this.mode = 'wallmaskedlightmap' },
      'click'
    ).name('Wall-masked lightmap');
    Game.gui.add(this.lightingSystem, 'ambientLightColour');
  }

  private save() {
    localStorage.setItem('lighting_demo_test_state', JSON.stringify({
      walls: this.walls.map(wall => wall.serialise()),
      grounds: this.grounds.map(ground => ground.serialise()),
      lights: this.lightingSystem.lights.map(light => light.serialise())
    }));
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

    this.walls.forEach(wall => wall.destroy());
    this.walls = state.walls.map(
      (wall: any) => Wall.deserialise(wall)
    );

    this.grounds.forEach(ground => ground.destroy());
    this.grounds = state.grounds.map(
      (ground: any) => Ground.deserialise(ground)
    );

    this.lightingSystem.lights.forEach(light => light.destroy());
    this.lightingSystem.lights = state.lights.map(
      (light: any) => Light.deserialise(light)
    );
  }

  public update(dt: number) {
    Debug.value('Press SHIFT-L to create a new light', '');
    Debug.value('Press SHIFT-W to create a new wall', '');
    Debug.value('Press SHIFT-G to create a new ground', '');
    Debug.value('CTRL-drag to resize', '');

    this.walls.forEach(wall => wall.update(dt));
    this.grounds.forEach(ground => ground.update(dt));

    this.lightingSystem.update(dt);

    // y-sorting
    this.walls = this.walls.sort(
      (a, b) => (a.position.y + a.size.y) - (b.position.y + b.size.y)
    );
    this.grounds = this.grounds.sort(
      (a, b) => (a.position.y + a.size.y) - (b.position.y + b.size.y)
    );

    // Handle item select
    if (InputManager.mousePressed()) {
      let selectedWall = this.walls.find(wall => wall.hovered) || null;
      let selectedGround = this.grounds.find(ground => ground.hovered) || null;
      let selectedLight = this.lightingSystem.lights.find(light => light.hovered) || null;

      this.selected = selectedLight || selectedWall || selectedGround || null;

      this.walls.forEach(wall => { wall.selected = false; });
      this.grounds.forEach(ground => { ground.selected = false; });
      this.lightingSystem.lights.forEach(light => { light.selected = false; });

      if (this.selected) {
        this.selected.selected = true;
      }
    }

    // Handle item create
    if (InputManager.keyDown('ShiftLeft')) {
      // Create light
      if (InputManager.keyPressed('KeyL')) {
        this.lightingSystem.lights.push(new Light({
          position: vec.cpy(InputManager.mousePosition),
        }));
      }

      // Create wall
      if (InputManager.keyPressed('KeyW')) {
        this.walls.push(new Wall({
          position: vec.cpy(InputManager.mousePosition),
        }));
      }

      // Create ground
      if (InputManager.keyPressed('KeyG')) {
        this.grounds.push(new Ground({
          position: vec.cpy(InputManager.mousePosition),
        }));
      }
    }

    // Handle item delete
    if (InputManager.keyPressed('Delete') && this.selected) {
      switch (this.selected.type) {
        case 'light':
          this.lightingSystem.lights = this.lightingSystem.lights.filter(
            light => light.id !== this.selected!.id
          );
          break;

        case 'wall':
          this.walls = this.walls.filter(
            wall => wall.id !== this.selected!.id
          );
          break;

        case 'ground':
          this.grounds = this.grounds.filter(
            ground => ground.id !== this.selected!.id
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
        this.grounds.forEach(ground => ground.draw(context));
        this.walls.forEach(wall => wall.draw(context));
        break;

      case 'normal':
        this.grounds.forEach(ground => ground.draw(context));
        this.walls.forEach(wall => wall.draw(context));

        this.lightingSystem.prepare(this.grounds, this.walls);
        this.lightingSystem.draw(context);
        break;

      case 'lightmap':
        this.lightingSystem.prepare(this.grounds, this.walls);
        context.drawImage(this.lightingSystem.lightMapCanvas, 0, 0);
        break;

      case 'groundmask':
        this.lightingSystem.prepare(this.grounds, this.walls);
        context.drawImage(this.lightingSystem.groundMaskCanvas, 0, 0);
        break;

      case 'wallmask':
        this.lightingSystem.prepare(this.grounds, this.walls);
        context.drawImage(this.lightingSystem.wallMaskCanvas, 0, 0);
        break;

      case 'groundmaskedlightmap':
        this.lightingSystem.prepare(this.grounds, this.walls);
        context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
        break;

      case 'wallmaskedlightmap':
        this.lightingSystem.prepare(this.grounds, this.walls);
        context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
        break;
    }

    context.restore();
  }
}
