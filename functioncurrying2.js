/**
 *  Create a js function that will remember its previously 
 *  passed values and return the sum of the current and previous sum.
 */

// sum(5); // 5
// sum(3); // 8
// sum(10); // 18

const curry = () => {
    let s = 0;

    return function (num) {
        s += num;
        return s;
    }
}

let sum = curry();

console.log(sum(5));
console.log(sum(3));
console.log(sum(3));
