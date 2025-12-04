// Flow of code
/**
 * add, subtract, multiply, exp all are declared and stored in HEAP
 *      STACK EMPTY
 *      add function fired
 *      add function PUSHED into call stack and execution starts
 *      synchronous code so blocks further code
 *      once returns value and stored in a variable add function gets POPPED from stack
 *      same for subtract,multiply and exp
 *      similarly console.log() PUSHED to stack and upon consolling value POPPED from stack
 *      STACK EMPTY
 * No concept of Web APIs or queue or event loop here as all synchronous blocking code   
 */

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const exp = (a, b) => a ^ b

const a = add(3, 2)
const b = subtract(3, 2)
const c = multiply(3, 2)
const d = exp(3, 2)

console.table([a, b, c, d])
