/**
 *  Filter MultiDimensional array... 
 *  const arr = [[1,[2,3,'foo',{'a':1,'b':2}],'bar']];
 *  const filtered = filter(arr,(e)=> {
 *      return typeof e === 'string';
 *  });
 * 
 *  [1,[2,3,'foo',{'a':1,'b':2}],'bar']
 * 
 *  output
 *  [[[[''foo']],'bar']]
 * 
*/
const filter = (arr, test) => {
    // Store the output
    const result = [];

    // iterate the array
    for (let a of arr) {
        // if sub-array
        if (Array.isArray(a)) {
            const output = filter(a, test);
            result.push(output);
        } else {
            if (test(a)) {
                result.push(a);
            }
        }
    }
    return result;
}

const arr = [[1, [2, 3, 'foo', { 'a': 1, 'b': 2 }], 'bar']];
const filtered = filter(arr, (e) => {
    return typeof e === 'object';
});

console.log(filtered);
