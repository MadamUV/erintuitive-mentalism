import { MaleTopsModule } from './male-tops.module';

describe('MaleTopsModule', () => {
  let maleTopsModule: MaleTopsModule;

  beforeEach(() => {
    maleTopsModule = new MaleTopsModule();
  });

  it('should create an instance', () => {
    expect(maleTopsModule).toBeTruthy();
  });
});
