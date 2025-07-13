// Basics: The setTimeout function

const add = (a, b) => {
    console.log('Inside adder', a + b)
}

console.log('Start...')

const timeoutId = setTimeout(add, 2000, 5, 7);

console.log('End...')

// Start...
// End...
// Inside adder 12



