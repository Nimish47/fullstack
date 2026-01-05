// play with let const var on below parameters
// re-declare variable
// update value



// var 
// redeclare allowed
// value update allowed
var appName = "Yolo"
var appName = "Bushan"  // allowed
console.log('var', appName)
appName = "Wuhan"   // allowed
console.log('var', appName)


// let
// redeclaration not allowed
// value update allowed
let appID = "1234"
let appID = "5678"  // SyntaxError: Identifier 'appID' has already been declared
console.log('let', appID)
appID = "9876"
console.log('let', appID)

// const
// redeclaration not allowed
// value update not allowed
const appKey = "alpha123"
appKey = "beta2345" //TypeError: Assignment to constant variable.
console.log('const',appKey)