// Implement mapSeries async function

// Implement a mapSeries async function that is similar to the
// Array.map() but returns a promise that resolves on the list of output
// by mapping each input through an asynchronous iteratee function or
// rejects it if any error occurs. The inputs are run in a sequence that is
// one after another.

// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

// const array = [1, 2, 3, 4, 5];

// const dobubleArray = array.map((val) => {
//     return val * 2;
// });

// console.log(dobubleArray);
// [1,2,3,4,5];

// results = [3,4,5,6,7]
// 0,1,2,3,4,5
function mapSeries(array, iteratee) {
    return new Promise((resolve, reject) => {
        const results = [];
        let index = 0;

        function next() {
            if (index < array.length) {
                const currentItem = array[index]; // 1
                iteratee(currentItem, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        results.push(result);
                        index++;
                        next();
                    }
                })
            } else {
                resolve(results);
            }
        }

        next();
    });
}


function asyncIteratee(item, callback) {
    setTimeout(() => {
        const result = item + 2;
        // if (result === 3) {
        //     callback('3 should not come', result);
        // }
        // else {
        callback(null, result);
        // }
    }, Math.random() * 1000);
}

const inputArray = [1, 2, 3, 4, 5];

mapSeries(inputArray, asyncIteratee).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})