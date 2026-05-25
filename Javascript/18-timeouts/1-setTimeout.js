// Basics: The setTimeout function

// define callbacks at diff place
// explain closure issue
const add = (a, b) => { console.log('Inside adder', a + b) }

console.log('Start...')

// both identical and valid
const timeoutId = setTimeout(add, 2000, 5, 7);
const timeoutId2 = setTimeout(() => add(5,7), 2000);

console.log('End...')

// Start...
// End...
// Inside adder 12
// Inside adder 12


