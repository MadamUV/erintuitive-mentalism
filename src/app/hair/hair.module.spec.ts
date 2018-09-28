import { HairModule } from './hair.module';

describe('HairModule', () => {
  let hairModule: HairModule;

  beforeEach(() => {
    hairModule = new HairModule();
  });

  it('should create an instance', () => {
    expect(hairModule).toBeTruthy();
  });
});
