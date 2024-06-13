// Create a memoizer function

const memoize = function (fn) {
    const cache = {};

    return function () {
        const KEY = JSON.stringify(arguments);
        if (cache[KEY]) {
            return cache[KEY];
        }
        const evaluatedValue = fn(...arguments);
        cache[KEY] = evaluatedValue;
        return evaluatedValue;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);

let a = memoizedFactorial(100);
console.log(a);

let b = memoizedFactorial(100);
console.log(b);









