// Debugging the Object constructor - Object()


// CASE: Debugging static utlities
// Object.is
// and many more...

// CASE: Debugging prototype properties
console.log(Object.prototype)                                            // see for yourself


// CASE: Creating an instance
// Validating instance's __proto__
const obj = {}
console.log(Object.is(obj.__proto__,Object.prototype))                  // true
