// Explaining CALLBACKS using SYNCHRONOUS library functions
    // filter function takes a function as parameter (also called as CALLBACK function)
    // filter function is SYNCHRONOUS in nature
    // Callbacks are used in synchronous functions when you want a part of the code to be easily
    // swapped with something else. Here we can swap posCallback with negCallback easily based
    // on need.

// filter positive vals
const posCallback = (val) => val > 0

// filter negative vals
const negCallback = (val) => val < 0

const arr = [1,2,-3,-4]

// filter function takes a function as parameter (also called as callback function)
const posValues = arr.filter(posCallback)
const negValues = arr.filter(negCallback)

console.log(posValues)      // [ 1, 2 ]
console.log(negValues)      // [ -3, -4 ]