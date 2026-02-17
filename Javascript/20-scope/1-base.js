// Agenda: a basic setup to observe 
    // call stack => which displays EC and scopes
    // execution context => GEC and function specific execution contexts
    // scopes => local, closure, global
// debug at line 5,9,13,19
// d1 => observe GEC => local scope
// d2 => observe GEC => local scope
// d3 => observe adder EC => local + closure scope
// d4 => observe multiplier EC
// observe GEC => local scope
// watch journey of a_sum over all debug points


//d1    
console.log('start')

var a_sum = 0;

//d2

function adder(flag) {
//d3
    return (flag + a_sum)
}

function multiplier(flag) {
//d4
    return (flag * a_sum)
}

a_sum = adder(2)
a_sum = multiplier(3)

//d5
console.log('end')