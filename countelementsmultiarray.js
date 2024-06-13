/**
 *  Count elements in nested array...
 *  const arr = [[1,[2,[3,4,'foo',{a:1,b:2}]],'bar']];
 *  const count = countInArray(arr, (e) => typeof e === 'number');
 *  console.log(count);
 * 
 *  o/p : 4
 */

const counterMultidimensional = (arr, cb) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            count += counterMultidimensional(item, cb);
        } else {
            if (cb(item) === true) {
                count++;
            }
        }
    }

    return count;
}

const arr = [[1, [2, [3, '', 'foo', { a: 1, b: 2 }]], 'bar']];
const count = counterMultidimensional(arr, (e) => typeof e === 'string');
console.log(count);