import { BodiesModule } from './bodies.module';

describe('BodiesModule', () => {
  let bodiesModule: BodiesModule;
  beforeEach(() => {
    bodiesModule = new BodiesModule();
  });

  it('should create an instance', () => {
    expect(bodiesModule).toBeTruthy();
  });
});
