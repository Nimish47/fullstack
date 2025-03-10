// Inside an object's method

// 'this' and arrow functions detailed:

// In this scenario, the outer scope of arrow function is not - global, rather it is another function - outer
    // at call-time:
        // the inner arrow fn points exactly to 'this' of function named 'outer' which happens to be obj here
        // however, note, the inner normal function's this still points to global object

const obj = {
    fName: 'Ankit',
    age: 18,
    outer: function () {
        const arrowFn = () => { console.log('arrow fn', this) }
        const normalFn = function() { console.log('normal fn', this) }      
        arrowFn()
        normalFn()
    }
}

obj.outer()
// arrow fn { fName: 'Ankit', age: 18, outer: [Function: outer] }
// Object [global]