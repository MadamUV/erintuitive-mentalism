import { HairsModule } from './hairs.module';

describe('HairsModule', () => {
  let hairsModule: HairsModule;

  beforeEach(() => {
    hairsModule = new HairsModule();
  });

  it('should create an instance', () => {
    expect(hairsModule).toBeTruthy();
  });
});
