# sweet-pattern
Sweet js macros for pattern matching in javascript

## How to use
This project depends on [sweet.js](http://sweetjs.org/).

To install it follow the instructions on their website or simply use:
```bash
$ npm install -g sweet.js
```

To run the tests:
```bash
npm run test
```

or:

To watch the tests you can use (for example) fswatch:
```bash
npm run test:watch
```

## Sweet examples
```javascript
def fib(0) => 1,
    fib(1) => 1,
    fib(n) => fib(n - 1) + fib(n - 2);

console.log(fib(5));

```

gets sweetified to:

```javascript
const fib$671 = function () {
    if (arguments[0] === 0) {
        return 1;
    } else if (arguments[0] === 1) {
        return 1;
    } else {
        return (n$675 => fib$671(n$675 - 1) + fib$671(n$675 - 2))(arguments[0]);
    }
};

console.log(fib$671(5));
```
