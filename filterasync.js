// Implement a function that takes an array of input and an async
// iteratee function and returns a promise that resolves with the list of
// inputs that has passed the test through the iteratee function.

// The inputs will run in parallel, but the output will be in the same order
// as the original.

// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

// [1, 2, 13, 4, 5];

// [{input:1,result:false},{input:13,result:true}] [13]

function filterAsync(inputs, asyncIteratee) {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await Promise.all(inputs.map(input => new Promise((res, rej) => {
                asyncIteratee(input, (error, result) => {
                    if (error) {
                        rej(error);
                    } else {
                        res({ input, result });
                    }
                })
            })));
            resolve(results.filter(({ result }) => result).map(({ input }) => input));
        } catch (e) {
            reject(e);
        }
    });
}


async function asyncIteratee(input, callback) {
    setTimeout(() => {
        const passedTest = input > 1;
        callback(null, passedTest);
    }, Math.random() * 1000);
}

const inputs = [1, 10, 3, 7, 6];

filterAsync(inputs, asyncIteratee).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})