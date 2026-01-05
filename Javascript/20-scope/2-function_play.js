// Agenda: observe hoisting with functions
// normal function declaration
// arrow function declaration
// variable assignment function declaration: let,const,var
// chrome devtools show 
            // "const" hoisting
            // "var" hoisting


// complete fn code hoisted
function adder(a, b) {
    return a + b
}

// hoisted but not accessible
const multiplier = (a, b) => {
    return a * b
}

// hoisted but "undefined"
var subtracter = function (a, b) {
    return a - b
}

adder(1, 2)
multiplier(3, 4)
subtracter(5, 6)