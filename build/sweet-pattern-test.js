import { expect } from 'chai';
describe('sweet-pattern', () => {
    it('should convert functions with no pattern', () => {
        const f$661 = function (x$662) {
            return 'Hello sweet';
        };
        expect(f$661(0)).to.equal('Hello sweet');
    });
    it('should convert functions with pattern', () => {
        const f$664 = function () {
            if (arguments[0] === 0) {
                return 'You are a unicorn';
            } else {
                return (x$667 => 'No, YOU are a unicorn')(arguments[0]);
            }
        };
        expect(f$664(0)).to.equal('You are a unicorn');
        expect(f$664(3)).to.equal('No, YOU are a unicorn');
    });
    it('should convert function with no arguments', () => {
        const f$669 = function () {
            return 'You smell funny';
        };
        expect(f$669()).to.equal('You smell funny');
    });
    it('should convert recursive functions', () => {
        const fib$671 = function () {
            if (arguments[0] === 0) {
                return 1;
            } else if (arguments[0] === 1) {
                return 1;
            } else {
                return (n$675 => fib$671(n$675 - 1) + fib$671(n$675 - 2))(arguments[0]);
            }
        };
        expect(fib$671(5)).to.equal(8);
    });
});