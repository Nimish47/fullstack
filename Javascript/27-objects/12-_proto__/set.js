// Different ways to set __proto__ of any 'instance'


// a sample object
const obj = {}

// CASE: manual way
obj.__proto__ = Array.prototype
console.log(obj.map)                                // can access

// CASE: Object.setPrototoype way
// for any instance

Object.setPrototypeOf(obj,Function.prototype)
console.log(obj.bind)                               // can access

// CASE: Object.create
// set at creation
// discussed in detail
