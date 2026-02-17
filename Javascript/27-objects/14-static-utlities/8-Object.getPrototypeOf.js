// Object constructor static property - Object.getPrototypeOf
// formal way of finding __proto__
// used with instances
// constructors are also instances of Function
// 


// CASE: fetch __proto__ of {} literal
console.log(Object.getPrototypeOf({}))                     // refers Object.prototype


// CASE: fetch __proto__ of Object constructor
console.log(Object.getPrototypeOf(Object))                   // refers Function.prototype


// CASE: fetch __proto__ nof custom constructor
function User() {}
console.log(Object.getPrototypeOf(User))                    // refers Function.prototype