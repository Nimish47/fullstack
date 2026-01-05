// Inside an object's method

// 'this' and arrow functions detailed:

// In this scenario, the outer scope of arrow function is not => global, rather it is another function => outer
    // at call-time:
        // the inner arrow fn points exactly to 'this' of function named 'outer' which happens to be obj here
        // however, note, the inner normal function's this still points to global object


// updated
// arrow fn does not have its own this
// but "this" can still be reference inside arrow fn 
// this used within arrow fn gets tied to this of outer() fn at definition time
// whatever this of outer fn will be is same as this of arrow fn    


// updated
// why normal fn does not refer obj => understand flow via (2B-case3.js)
// this.normalFn => WOULD HAVE FIXED THIS ISSUE

// obj.outer => this = obj (via "call")
// normal() => "this" inside normal clueless (call is clueless as no object attached)
// points to global


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