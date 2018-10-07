import { EyesModule } from './eyes.module';

describe('EyesModule', () => {
  let eyesModule: EyesModule;

  beforeEach(() => {
    eyesModule = new EyesModule();
  });

  it('should create an instance', () => {
    expect(eyesModule).toBeTruthy();
  });
});
