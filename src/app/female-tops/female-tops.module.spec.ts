import { FemaleTopsModule } from './female-tops.module';

describe('FemaleTopsModule', () => {
  let femaleTopsModule: FemaleTopsModule;

  beforeEach(() => {
    femaleTopsModule = new FemaleTopsModule();
  });

  it('should create an instance', () => {
    expect(femaleTopsModule).toBeTruthy();
  });
});
