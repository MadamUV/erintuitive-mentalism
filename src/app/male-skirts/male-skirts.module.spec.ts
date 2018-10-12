import { MaleSkirtsModule } from './male-skirts.module';

describe('MaleSkirtsModule', () => {
  let maleSkirtsModule: MaleSkirtsModule;

  beforeEach(() => {
    maleSkirtsModule = new MaleSkirtsModule();
  });

  it('should create an instance', () => {
    expect(maleSkirtsModule).toBeTruthy();
  });
});
