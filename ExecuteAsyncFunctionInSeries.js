// Execute async functions in Series

// Problem Statement -
// Implement a function that takes a list of async functions as input and
// executes them in a series that is one at a time. The next task is
// executed only when the previous task is completed.

const asyncTask = function (i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${i}`), 1000 * i)
    });
}

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
];

const executeInSeries = async function (array) {
    for (let promise of array) {
        try {
            const result = await promise;
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }
}

executeInSeries(promises);
