const promise1 = new Promise((res, rej) => {
    res('hello i am resolved');
});

// promise1.then((res) => {
//     console.log(res);
//     return 1;
// }).then((res) => {
//     console.log(res);
//     return 2;
// }).then((res) => {
//     console.log(res);
// }).then((res) => {
//     console.log(res);
//     return 11111;
// }).catch(err => {
//     console.log(err, 'errrr');
// }).finally(() => {
//     console.log('finally1');
// }).finally(() => {
//     console.log('finally2');
// }).then((res) => {
//     console.log(res);
// })

Promise.prototype.meraFinally = function (callback) {
    if (typeof callback !== 'function') {
        return this.then(callback, callback);
    }

    return this.then(
        (value) => { return Promise.resolve(callback()).then(() => { return value; }) },
        (err) => { return Promise.resolve(callback()).then(() => { throw err; }) },
    )
}

promise1.then((res) => {
    console.log(res);
    return 1;
}).meraFinally(() => {
    console.log('hey')
}).then((res) => {
    console.log(res, 'cheel');
})