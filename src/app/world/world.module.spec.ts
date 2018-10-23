import { WorldModule } from './world.module';

describe('WorldModule', () => {
  let worldModule: WorldModule;

  beforeEach(() => {
    worldModule = new WorldModule();
  });

  it('should create an instance', () => {
    expect(worldModule).toBeTruthy();
  });
});
