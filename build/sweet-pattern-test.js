import { expect } from 'chai';
describe('sweet-pattern', () => {
    it('should convert functions with no pattern', () => {
        const f$665 = function () {
            return (x$666 => x$666)(arguments[0]);
        };
        expect(f$665(0)).to.equal(0);
    });
    it('should convert functions with pattern', () => {
        const f$668 = function () {
            if (arguments[0] === 0) {
                return 'You are a unicorn';
            } else {
                return (x$671 => 'No, YOU are a unicorn')(arguments[0]);
            }
        };
        expect(f$668(0)).to.equal('You are a unicorn');
        expect(f$668(3)).to.equal('No, YOU are a unicorn');
    });
    it('should convert function with no arguments', () => {
        const f$673 = function () {
            return 'You smell funny';
        };
        expect(f$673()).to.equal('You smell funny');
    });
    it('should convert recursive functions', () => {
        const fib$675 = function () {
            if (arguments[0] === 0) {
                return 1;
            } else if (arguments[0] === 1) {
                return 1;
            } else {
                return (n$679 => fib$675(n$679 - 1) + fib$675(n$679 - 2))(arguments[0]);
            }
        };
        expect(fib$675(5)).to.equal(8);
    });
    it('should convert functions with body and no pattern', () => {
        const f$681 = function () {
            return (x$682 => {
                var y$683 = x$682;
                return y$683;
            })(arguments[0]);
        };
        expect(f$681('Honey bear')).to.equal('Honey bear');
    });
    it('should convert functions with body and pattern', () => {
        const f$685 = function () {
            if (arguments[0] === 'Here comes the') {
                return 'sun';
            } else {
                return (x$688 => {
                    var y$689 = x$688;
                    return y$689;
                })(arguments[0]);
            }
        };
        expect(f$685('Here comes the')).to.equal('sun');
    });
});