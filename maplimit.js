// Implement a mapLimit function that is similar to the Array.map() but
// returns a promise that resolves on the list of output by mapping each
// input through an asynchronous iteratee function or rejects it if any
// error occurs.It also accepts a limit to decide how many operations can
// occur at a time.

// The asynchronous iteratee function will accept an input and a
// callback.The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

// [1, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];
const limit = 2;

Array.prototype.chop = function (size) {
    //temp array
    const temp = [...this];
    //if the size is not defined
    if (!size) {
        return temp;
    }
    //output
    const output = [];
    let i = 0;
    //iterate the array
    while (i < temp.length) {
        //slice the sub-array of a given size
        //and push them in output array
        output.push(temp.slice(i, i + size));
        i = i + size;
    }
    return output;
};

// [1,2,3,4,5]; 2 => [[1,2],[3,4],[5]]
const mapLimit = (arr, limit, fn) => {
    return new Promise(async (res, rej) => {
        try {
            let chopped = arr.chop(limit);
            let results = [];

            for (let subArray of chopped) {
                let subResults = await Promise.all(subArray.map(async (e) => {
                    return new Promise((resolve, reject) => {
                        fn(e, (error, value) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(value);
                            }
                        })
                    })
                }));
                results.push(subResults);
            }
            res(results);
        } catch (e) {
            rej(e);
        }
    })
}


mapLimit([1, 2, 3, 4, 5], 3, function (input, cb) {
    setTimeout(function () {
        input = input * 2;
        cb(null, input);
    }, Math.random() * 1000);
}).then((result) => {
    console.log(result);
});