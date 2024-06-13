const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
);
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000, 'ho gaya resolve'),
);

const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises).then((results) =>
//     results.forEach((result) => console.log(result)),
// );


// { status: 'fulfilled', value: 3 }
// { status: 'rejected', reason: 'foo' }
// Approach 1
const meraAllSettled = function (promiseArray) {
    const result = [];
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise) => {
            Promise.resolve(promise).then((response) => {
                result.push({
                    status: 'fulfilled',
                    value: response
                });
            }).catch((err) => {
                result.push({
                    status: 'rejected',
                    reason: err
                });
            }).finally(() => {
                if (result.length === promiseArray.length) {
                    resolve(result);
                }
            });
        });
    })
};

// meraAllSettled(promises).then((response) => {
//     console.log(response);
// })

// Approach 2

const meraAllSettled2 = function (promiseAray) {
    const results = promiseAray.map((promise) =>
        Promise.resolve(promise).then(
            response => ({ status: 'fulfilled', value: response }),
            err => ({ status: 'rejected', reason: err })
        )
    );

    return Promise.all(results);
}

meraAllSettled2(promises).then((response) => {
    console.log(response);
})
