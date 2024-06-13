// Create a pausable auto incrementor in JavaScript, which takes an
// initial value and steps as input and increments the initial value with
// given steps every second. The incrementer can be paused and resumed
// back.
const timer = (init = 0, step = 1) => {
    let intervalId;
    let count = init;

    const startTimer = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                console.log(count);
                count = count + step;
            }, 1000);
        }
    }

    const stopTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        startTimer,
        stopTimer
    }
}


const timerObject = timer(10, 10);

timerObject.startTimer();


setTimeout(() => {
    timerObject.stopTimer();
}, 11000);













