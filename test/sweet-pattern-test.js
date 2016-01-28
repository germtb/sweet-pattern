import {expect} from 'chai';

describe('sweet-pattern', () => {

  it('should convert functions with no pattern', () => {
    def f(x) => "Hello sweet";
    expect(f(0)).to.equal("Hello sweet");
  });

});
