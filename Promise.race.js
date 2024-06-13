const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'two');
});

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });

const mereRacePromise = function (promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise) => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    })
}

mereRacePromise([promise1, promise2]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err, 'errorrrrrrrrrrr');
})