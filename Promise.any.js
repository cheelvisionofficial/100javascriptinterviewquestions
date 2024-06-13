const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 600, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promise2 = Promise.reject(1);
const promise3 = Promise.reject(2);


const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));


const meraAnyPromise = function (promiseArray) {
    const promiseErrors = [];
    let rejectedPromise = 0;
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise) => {
            Promise.resolve(promise).then(resolve).catch((error) => {
                promiseErrors[rejectedPromise] = error;
                rejectedPromise++;
                if (rejectedPromise === promiseArray.length) {
                    reject(new AggregateError(promiseErrors, "All the promises are rejected"));
                }
            })
        })
    })
}

meraAnyPromise(promises).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

// Promise.resolve().then.catch

