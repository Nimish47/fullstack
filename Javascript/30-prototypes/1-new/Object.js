// understanding Object library constructors + new
// Object => static + __proto analysis
// Object instance => __proto analysis + can access Creator.prototype
// Instance __proto__ depends on value passed to constructor


const {log} = console


// CASE: Analyze Object.__proto__
log(Object.__proto__)                           // Function.prototype

// CASE: Object static utilities
// Object.is

// CASE: new Object()
// analyze instance.__proto__
const a1 = new Object()
log(a1)                                         // {}
log(a1.__proto__)                               // Object.prototype
// a1.toString()                                // possible


// CASE: new Object(obj)
// analyze instance.__proto__
const a2 = new Object({fName: 'Nishant'})
log(a2) // { fName: 'Nishant' }
log(a2.__proto__)                               // Object.prototype
// a1.toString()                                // possible


// CASE: new Object(arr)
// analyze instance.__proto__
const a3 = new Object([5,10,15,20])
log(a3)                                          // [ 5, 10, 15, 20 ]
log(a3.__proto__)                                // Array.prototype
// a3.map                                        // possible

// CASE: new Object(num)
// analyze instance.__proto__
const a4 = new Object(100)
log(a4)                                          // Number {100}
log(a4.__proto__)                                // Number.prototype
// a4.toFixed(1)                                 // possible


// CASE: new Object(str)
// analyze instance.__proto__
const a5 = new Object("Popsicle")
log(a5)                                          // String {'Popsicle'}
log(a5.__proto__)                                // String.prototype
// a5.trim()                                     // possible


// CASE: new Object(null)
// analyze instance.__proto__
const a6 = new Object(null)
log(a6)                                         // {}
log(a6.__proto__)                               // Object.prototype
// a1.toString()                                // possible


// CASE: new Object(undefined)
// analyze instance.__proto__
const a7 = new Object(undefined)
log(a7)                                         // {}
log(a7.__proto__)                               // Object.prototype