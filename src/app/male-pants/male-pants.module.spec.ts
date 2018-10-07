import { MalePantsModule } from './male-pants.module';

describe('MalePantsModule', () => {
  let malePantsModule: MalePantsModule;

  beforeEach(() => {
    malePantsModule = new MalePantsModule();
  });

  it('should create an instance', () => {
    expect(malePantsModule).toBeTruthy();
  });
});
