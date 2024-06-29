// groupBy([6.1,4.2,6.3],Math.floor);

// groupBy(["one","two","three"],"length");

// o/p {6:[6.1,6.3],4:[4.2]}
// o/p {3:["one","two"],5:["three"]}

const groupBy = (values, keyFinder) => {
    return values.reduce((a, b) => {
        const key = typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder];

        if (!a[key]) {
            a[key] = [b];
        } else {
            a[key] = [...a[key], b];
        }
        return a;
    }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

console.log(groupBy(["one", "two", "three"], "length"));







