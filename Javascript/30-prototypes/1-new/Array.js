// understanding Array library constructors + new
// Array => static + __proto analysis
// Array instance => __proto analysis + can access Creator.prototype

const { log } = console

// CASE: Analyze Array.__proto__
log(Array.__proto__)                    // Function.prototype

// apply static utlities on Array constructor
log(Array.isArray([]))                  // true   


// CASE: new Array()
// debug instance
// debug instance.__proto__
const a1 = new Array()
log(a1)                                 // []
log(a1.__proto__)                       // Array.prototype
// a1.map()                             // works

// CASE: new Array(1,2,3)
// debug instance
// debug instance.__proto__
const a2 = new Array(1, 4, 7)           
log(a2)                                 // [1,4,7]
log(a2.__proto__)                       // Array.prototype
// a3.map()                             // works


// CASE: Issue with Array()
// new Array(5)
// debug instance
// debug instance.__proto__
const a3 = new Array(5)
log(a3)                                  // (5) [empty × 5]
log(a3.__proto__)                        // Array.prototype
// a3.map()                             // works