import { BodiesModule } from './bodies.module';

describe('Body2Module', () => {
  let bodiesModule: BodiesModule;

  beforeEach(() => {
    bodiesModule = new BodiesModule();
  });

  it('should create an instance', () => {
    expect(bodiesModule).toBeTruthy();
  });
});
