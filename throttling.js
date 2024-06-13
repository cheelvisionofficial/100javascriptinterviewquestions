// setTimeout:
// setTimeout is used to schedule a function to be executed after a certain delay.
// In this case, the delay is calculated as limit - (Date.now() - lastRan). This ensures that the function will be executed exactly after the remaining time left in the limit period.


// limit - (Date.now() - lastRan):
// Date.now() returns the current timestamp.
// lastRan is the timestamp of the last execution of the throttled function.
// Date.now() - lastRan calculates the time elapsed since the last execution.
// limit - (Date.now() - lastRan) gives the remaining time until the limit period is completed.
// This ensures the function is scheduled to run after exactly the remaining time left in the throttling interval.


// Function passed to setTimeout:
// The function inside setTimeout will be executed after the delay calculated above.


// if ((Date.now() - lastRan) >= limit):
// This check ensures that when the timeout completes, the required limit time has indeed passed since the last execution.
// This is a safeguard in case the timeout was scheduled to execute a bit earlier than the limit period due to timing inaccuracies.

// func.apply(context, args):
// This executes the original function func with the preserved this context (context) and arguments (args).

// lastRan = Date.now():
// Updates lastRan to the current timestamp, marking this as the latest execution time of the throttled function.

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;

    return function () {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }
        else {
            clearTimeout(lastFunc);

            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }

    }
}

function logTime() {
    console.log(new Date().toLocaleTimeString());
}

window.addEventListener('resize', throttledLogTime);


// 3 min
// click1 (lastRan) (10:00)

// click2 10:02 - 10:00 = 2 min (3min-2min) = 1min

// click3

// click4


