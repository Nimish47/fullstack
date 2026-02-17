// understanding String library constructors + new
// String => static + __proto analysis
// String instance => __proto analysis + can access Creator.prototype


const { log } = console

// CASE: Analyze String.__proto__
log(String.__proto__)                                   // Function.prototype

// CASE: apply Static utlities on String constructor
// String.raw


// CASE: new String(23)
// analyze instance.__proto
// apply
// console instance
// pull value - valueOf
const a1 = new String(23)
log(a1)                                         // String {'23'}
log(a1.__proto__)                               // String.prototype
log(a1.valueOf())                               // 23

// CASE: new String('hello')
// analyze instance.__proto
// apply
// console instance
// pull value - valueOf
const a2 = new String("hello")                  
log(a2)                                     // String {'hello'}
log(a2.__proto__)                           // String.prototype
log(a2.valueOf())                           // hello