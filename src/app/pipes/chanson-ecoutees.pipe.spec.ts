import { ChansonEcouteesPipe } from './chanson-ecoutees.pipe';

describe('ChansonTresPopulairePipe', () => {
  it('create an instance', () => {
    const pipe = new ChansonEcouteesPipe();
    expect(pipe).toBeTruthy();
  });
});
