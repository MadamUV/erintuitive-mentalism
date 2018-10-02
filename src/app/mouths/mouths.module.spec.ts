import { MouthsModule } from './mouths.module';

describe('MouthsModule', () => {
  let mouthsModule: MouthsModule;

  beforeEach(() => {
    mouthsModule = new MouthsModule();
  });

  it('should create an instance', () => {
    expect(mouthsModule).toBeTruthy();
  });
});
