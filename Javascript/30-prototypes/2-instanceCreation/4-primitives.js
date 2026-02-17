// Creating true primitives and wrapper primitive objects



// CASE: true primitives => number, string, boolean
// console
// access value - direct
// has __proto__ => yes (via autoboxing)
const str = "hello"
console.log(str)                        // hello
console.log(str.__proto__)              // String.prototype



// CASE: wrapper objects => new String("hello")
// console
// access value => valueOf
// __proto__
const str2 = new String("hello")
console.log(str2)                   // String {'hello'}
console.log(str2.__proto__)         // String.prototype
console.log(str2.valueOf())         // hello

// wrapper objects => new Object("hello")
// console
// access value  => valueOf
// observe __proto__
const str3 = new Object("hello")
console.log(str3)                   // // String {'hello'}
console.log(str3.__proto__)         // String {'hello'}
console.log(str3.valueOf())         // hello