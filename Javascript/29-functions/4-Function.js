// Function constructor and important details


// CASE: Analyze Function.__proto__ (surprising result)
console.log(Function.__proto__)                         // refers Function.prototype



// All constructors are created by Function? T/F
// constructor.__proto__ = Function.prototoype??
// yes


// CASE: custom
function User() { }
console.log(User.__proto__)                             // refers Function.prototype

// CASE: library
console.log(Object.__proto__)                           // refers Function.prototype


// CASE: Function (as instance) created by Function (constructor)
// Function.__proto === Function.prototype ? Haha
console.log(Object.is(Function.__proto__, Function.prototype))              // true


