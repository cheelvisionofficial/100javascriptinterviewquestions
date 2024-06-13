// Implement clearAllTimeout 

window.setTimeout = function () {
    console.log('hey');
}

setTimeout(() => {
    console.log('hey')
}, 1000)