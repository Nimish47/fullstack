// all Constructors are an instance of Function()
// Condition: if __proto__ refers Function.prototype


// create a utility fn
function check(obj) { console.log(Object.is(obj, Function.prototype)) }


// Custom
function User() {}
check(User.__proto__)               // true


// Library
check(Object.__proto__)             // true
check(Array.__proto__)              // true
check(String.__proto__)             // true
check(Number.__proto__)             // true


// Function
// Function is an instance of Function ??? Yes
check(Function.__proto__)             // true