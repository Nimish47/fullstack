// Question: Any constructor’s .prototype leads to Object.prototype?
// True!!!


// library constructor - Object
console.log(Object.is(Object.prototype, Object.prototype))                          // true


// library constructor - Array
console.log(Object.is(Array.prototype.__proto__, Object.prototype))                 // true


// library constructor - Function
console.log(Object.is(Function.prototype.__proto__, Object.prototype))              // true


// library constructor - Set
console.log(Object.is(Set.prototype.__proto__, Object.prototype))                   // true


// library constructor - String
console.log(Object.is(String.prototype.__proto__, Object.prototype))                // true


// custom constructor
function User(id,age) {
    this.id = id,
    this.age = age
}

console.log(Object.is(User.prototype.__proto__, Object.prototype))                  // true