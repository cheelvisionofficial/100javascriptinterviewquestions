// Check if a function is called with new keyword...

function A() {
    // console.log(this);
    // if (this instanceof A) {
    //     console.log('yes called with new keyword');
    // } else {
    //     console.log('not called with new keyword');
    // }
    if (new.target) {
        console.log('yes called with new keyword');
    } else {
        console.log('not called with new keyword');
    }
}

const a = new A();

A();