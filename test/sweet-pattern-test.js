import {expect} from 'chai';

describe('sweet-pattern', () => {

  it('should convert functions with no pattern', () => {
    def f(x) => x;
    expect(f(0)).to.equal(0);
  });

  it('should convert functions with pattern', () => {
    def f(0) => "You are a unicorn",
        f(x) => "No, YOU are a unicorn";
    expect(f(0)).to.equal("You are a unicorn");
    expect(f(3)).to.equal("No, YOU are a unicorn");
  });

  it('should convert function with no arguments', () => {
    def f() => "You smell funny";
    expect(f()).to.equal("You smell funny");
  });

  it('should convert recursive functions', () => {
    def fib(0) => 1,
        fib(1) => 1,
        fib(n) => fib(n - 1) + fib(n - 2);
    expect(fib(5)).to.equal(8);
  });

  it('should convert functions with body and no pattern', () => {
    def f(x) => {
      var y = x;
      return y;
    };
    expect(f("Honey bear")).to.equal("Honey bear");
  });

  it('should convert functions with body and pattern', () => {
    def f("Here comes the") => "sun",
        f(x) => {
      var y = x;
      return y;
    };
    expect(f("Here comes the")).to.equal("sun");
  });

});
