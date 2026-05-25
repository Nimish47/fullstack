// arguments in function


// normal fucntions
function adder(a, b, c) { 
    console.log(arguments)                                      //  [Arguments] { '0': 10, '1': 20, '2': 30 }
    console.log(arguments[0])                                   //  10
}
adder(10, 20, 30)                                              


// issue: arrow functions
// arguments do not work as intended
const adder2 = (a, b, c) => { 
    console.log(arguments)                                      // prints something vague
    console.log(arguments[0])                                   // {}
}         
adder2(10, 20, 30)