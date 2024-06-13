/**
 * Sampling Function
 * 
 * Create a function that accepts a function as input and a count and 
executes that input function once for a given count of calls. Known as a 
sampling function.
 * 
 * function message (){ 
     console .log( "hello" ); 
   } 
const  sample = sampler(message,  4 ); 
sample(); 
sample(); 
sample(); 
sample(); // “hello”  this will be executed 
sample(); 
sample(); 
sample(); 
sample();  // “hello”  this will be executed
 */

function sampler(fn, count, context) {
    let counter = 0;

    return function (...args) {
        context = this ?? context;

        if (++counter !== count) {
            return;
        }

        fn.apply(context, args);
        counter = 0;
    }
}

function message() {
    console.log("hello");
}
const sample = sampler(message, 1);
sample();
sample();
sample();
sample(); // “hello”  this will be executed
sample();
sample();
sample();
// sample();  // “hello”  this will be executed