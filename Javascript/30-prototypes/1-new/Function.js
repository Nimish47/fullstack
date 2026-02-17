// understanding Function library constructors + new
// Function => static + __proto analysis
// Function instance => __proto analysis + can access Creator.prototype
// normal and arrow => both fns have __proto__

const { log } = console

// CASE: Analyze Function.__proto__
log(Object.is(Function.__proto__, Function.prototype))              // true


// CASE: apply static utlities on Function constructor
// there are , but not we generally use


// CASE: create a normal function
// analyze __proto__
function norm(){}
log(norm.__proto__)                                     // Function.prototype


// CASE: create an arrow function
// analyze __proto__ => yes points to Function.prototype like normal
const arr = () => {}
log(arr.__proto__)                                      // Function.prototype