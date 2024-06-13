/**
 *  Create a toggle function that accepts a list of arguments
 *  and toggles each of them when invoked in a cycle...
 */


const toggle = function (...list) {
    let current = -1;
    const length = list.length;

    return function () {
        current = (current + 1) % length;
        // if (current === list.length) {
        //     current = 0;
        // }
        return list[current];
    }
}


let onOff = toggle('on', 'off', 'onoff');

console.log(onOff()); // on
console.log(onOff()); // off
console.log(onOff()); // on
console.log(onOff()); // off
console.log(onOff()); // on
console.log(onOff()); // off

// current = 4
// [1,2,3,4];
// 1,2,3,4,1









