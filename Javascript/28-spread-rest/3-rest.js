// rest operator
// very powerful


// normal fucntions
function adder(...args) {
    console.log(args)                                      //  [ 10, 20, 30 ]
    console.log(args[0])                                   //  10
}
adder(10, 20, 30)

// issue: arrow functions
// works as intended
const adder2 = (...args) => {
    console.log(args)                                      // [ 10, 20, 30 ]
    console.log(args[0])                                   // 10
}
adder2(10, 20, 30)



// very powerful
// number of params can be dynamic
// add 'n' numbers
const add = (...args) => args.reduce((acc, item) => acc + item, 0)

console.log(add(1, 2, 3, 4))               // 10
console.log(add(10, 99))                   // 109   