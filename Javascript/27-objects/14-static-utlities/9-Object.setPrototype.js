// Object constructor static property - Object.setPrototype


// a sample object
const obj = {}
console.log(Object.getPrototypeOf(obj))                         // Object.prototype

// CASE:  set prototype
Object.setPrototypeOf(obj,Function.prototype)                  
console.log(Object.getPrototypeOf(obj))                         // Function.prototype