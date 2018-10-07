import { FemalePantsModule } from './female-pants.module';

describe('FemalePantsModule', () => {
  let femalePantsModule: FemalePantsModule;

  beforeEach(() => {
    femalePantsModule = new FemalePantsModule();
  });

  it('should create an instance', () => {
    expect(femalePantsModule).toBeTruthy();
  });
});
