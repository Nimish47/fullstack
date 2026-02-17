// Question: Any instance’s __proto__ leads to Object.prototype?
// debug __proto__ chain


// CASE: object
const obj = {}
console.log(Object.is(obj.__proto__, Object.prototype))                         // true

// CASE: array 
const arr = []
console.log(Object.is(arr.__proto__.__proto__, Object.prototype))               // true

// CASE: function
function Happy(){}
console.log(Object.is(Happy.__proto__.__proto__, Object.prototype))             // true

// CASE: string
const str = 'hello'
console.log(Object.is(str.__proto__.__proto__, Object.prototype))               // true

// CASE: exception 1 - null
// null object has no __proto__
console.log(null.__proto__)                                                     // error
    
// CASE: exception 2 - undefined
// undefined has no __proto__
console.log(undefined.__proto__)                                                // error