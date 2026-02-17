// __proto__ of [[ANY]] instance leads to Object.prototype
// [[ANY]] = 
    // constructors
    // instances
    // exceptions - null and undefined

// create a utility fn
function check(obj) {
    console.log(Object.is(obj, Object.prototype))
}

// all library constructors
check(Object.__proto__.__proto__)                   // true
check(Function.__proto__.__proto__)                 // true
check(Array.__proto__.__proto__)                    // true
check(String.__proto__.__proto__)                   // true


// custom constructors
function User() { }
check(User.__proto__.__proto__)                     // true

// object instances
const obj = {}
check(obj.__proto__)                                // true

// array instances
const arr = []
check(arr.__proto__.__proto__)                      // true


// function instances
function popEye() { }
check(popEye.__proto__.__proto__)                   // true


// exception 1 - null
// null has no __proto__
// check(null.__proto__)                               // error


// exception 2 - undefined
// undefined has no __proto__
// check(undefined.__proto__)                               // error