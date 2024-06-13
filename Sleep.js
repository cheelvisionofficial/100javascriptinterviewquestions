// Make function sleep...

const sleep = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

const performAction = async () => {
    console.log('hey cheelvision');
    await sleep(10000);
    console.log('hey i am good');
}

performAction();