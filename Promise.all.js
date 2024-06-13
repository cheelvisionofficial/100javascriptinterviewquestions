/** 
    According to MDN –
    The Promise.all() accepts an array of promises and returns a promise
    that resolves when all of the promises in the array are fulfilled or when
    the iterable contains no promises. It rejects with the reason of the first
    promise that rejects.
*/

// const promise1 = new Promise((res, rej) => {
//     res(123);
// });

// const promise2 = new Promise((res, rej) => {
//     res('i am passed');
// });

// const promise3 = new Promise((res, rej) => {
//     rej('I am rejected');
// })

const promise4 = 'hey';

Promise.all([promise4]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// const promise3 = new Promise((res, rej) => {
//     rej('I am third promise');
// });

/** Polyfill */

// const meraPromiseAll = function (promiseArray) {
//     const promiseResults = []; // to hold the result...

//     let promiseCompleted = 0; // to track how many promise completed...

//     return new Promise((resolve, reject) => {

//         if (!Array.isArray(promiseArray)) {
//             reject(new TypeError('The argument must be an array'));
//             return;
//         }

//         if (promiseArray.length === 0) {
//             resolve([]);
//             return;
//         }


//         promiseArray.forEach((promise, index) => {
//             promise.then((val) => {
//                 promiseResults[index] = val;
//                 promiseCompleted += 1;
//                 if (promiseCompleted === promiseArray.length) {
//                     resolve(promiseResults);
//                 }
//             }).catch(error => {
//                 reject(error);
//             })
//         })
//     })
// }


// meraPromiseAll([promise1, promise2, promise3]).then((res) => {
//     console.log(res);
// }).catch(e => {
//     console.log(e, 'this is error');
// })















