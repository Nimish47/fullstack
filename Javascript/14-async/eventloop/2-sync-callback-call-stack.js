// Flow of code
/**
 * add, subtract and compute are declared and stored in HEAP
 *      STACK EMPTY
 *      compute function fired
 *      compute function PUSHED into call stack and execution starts
 *      Note: compute takes 2 functions as parameter (as callback functions) [Note code below it is blocked]
 *          add function fired
 *          add function PUSHED into call stack and execution starts
 *          add function returns value    [Note code below it is blocked]
 *          add function POPPED from stack
 *          subtract function fired
 *          subtract function PUSHED into call stack and execution starts
 *          Note: at this point compute and subtract are in the stack in bottom to top order
 *          subtract function returns value    [Note code below it is blocked]
 *          subtract function POPPED from stack
 *          console.log(`Adder:  ${a} Sub: ${b}`)  PUSHED RETURNS POPPED from stack
 *      compute function execution complete
 *      compute function POPPED from stack  
 *      console.log('Good Bye!')    PUSHED RETURNS POPPED from stack    
 *      STACK EMPTY   
 */

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const compute = (callbackAdd, callbackSub) => {
    const a = callbackAdd(3, 2)
    const b = callbackSub(3, 2)
    console.log(`Adder:  ${a} Sub: ${b}`)                   // Adder:  5 Sub: 1
}

compute(add,subtract)
console.log('Good Bye!')                                    // Good Bye!




