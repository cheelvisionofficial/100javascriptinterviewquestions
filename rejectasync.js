// Implement a function that takes an array of input and an async
// iteratee function and returns a promise that resolves with the list of
// inputs that has failed the test through the iteratee function. This
// function is exactly the opposite of the Async Filter.

// The inputs will run in parallel, but the output will be in the same order
// as the original.

// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

const rejectAsync = (arr, asyncIteratee) => {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await Promise.all(arr.map((e) => {
                return new Promise((res) => {
                    asyncIteratee(e, (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            res({ input: e, result });
                        }
                    })
                })
            }));
            resolve(results.filter(({ result }) => !result).map(({ input }) => input));
        }
        catch (e) {
            reject(e);
        }
    });
}

async function asyncIteratee(input, callback) {
    setTimeout(() => {
        const passedTest = input > 15;
        callback(null, passedTest);
    }, Math.random() * 1000);
}

const inputs = [1, 10, 3, 7, 6];

rejectAsync(inputs, asyncIteratee).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
});














