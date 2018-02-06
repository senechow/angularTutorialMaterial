import { ReversePipe } from './reverse.pipe';

describe('reverse pipe', () => {
  it('should create the app', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
