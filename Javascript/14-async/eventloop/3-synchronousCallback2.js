// Flow of code
/**
 * Everything is same as synchronousCallback, only difference is add and subtract
 * are not passed as parameters
 */

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const compute = () => {
    const a = add(3, 2)
    const b = subtract(3, 2)
    console.log(`Adder:  ${a} Sub: ${b}`)                   // Adder:  5 Sub: 1
}

compute()
console.log('Good Bye!')                                    // Good Bye!




