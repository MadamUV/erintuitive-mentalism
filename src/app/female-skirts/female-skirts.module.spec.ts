import { FemaleSkirtsModule } from './female-skirts.module';

describe('FemaleSkirtsModule', () => {
  let femaleSkirtsModule: FemaleSkirtsModule;

  beforeEach(() => {
    femaleSkirtsModule = new FemaleSkirtsModule();
  });

  it('should create an instance', () => {
    expect(femaleSkirtsModule).toBeTruthy();
  });
});
