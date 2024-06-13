// Implement a function in JavaScript that retries promises N number of
// times with a delay between each call.

// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

const delayFunc = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, delay);
    });
}

async function retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed') {
    try {
        await asyncFn();
    } catch (e) {
        if (retries <= 0) {
            return Promise.reject(finalError);
        }
        await delayFunc(delay);

        return retry(asyncFn, retries - 1, delay, finalError);
    }
}

function asyncFn() {
    return new Promise((resolve, reject) => {
        const result = Math.floor(Math.random() * 100);
        if (result <= 3) {
            resolve('Hey result is ' + result);
        } else {
            reject('Hey u are rejected with ' + result + ' number');
        }
    })
}

retry(asyncFn, 10).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})