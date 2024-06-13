const name = 'cheel';
const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const args = arguments;
        const context = this; // Capture the context here

        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => {
            // Use arrow function to preserve the outer context
            func.apply(context, args); // Call func with the captured context and arguments
        }, delay);
    };
};

// // Define a simple function
// function showMessage(message, msg2) {
//     console.log(message);
// }

// // Debounce the function
// const debouncedShowMessage = debounce(showMessage, 500);


// // Call the debounced function multiple times in quick succession
// debouncedShowMessage('cheelvision', '1');
// setTimeout(() => {
//     debouncedShowMessage('cheelvision', '2');
// }, 200);
// setTimeout(() => {
//     debouncedShowMessage('cheelvision', '3');
// }, 400);
const obj = {
    name: 'cheel',
    showMessage: function (message) {
        console.log(this);
        console.log(this.name, message);
    }
};

const debouncedShowMessage = debounce(obj.showMessage, 500);
debouncedShowMessage('Hello');
