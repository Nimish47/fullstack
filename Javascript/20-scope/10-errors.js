// Agenda: Discuss 3 main types of errros
    // reference error (TDZ)
    // Syntax error (let redeclaration)
    // Type error (const value change)

// reference error  - 1
// no such variable named "appName" anywhere in program hence the error
console.log(appName)       // ReferenceError: appName is not defined

// reference error - 2 (TDZ)
// "appID" is hoisted but since type is "let", it;s currently in TDZ and not accessible yet
console.log(appID)
let appID = "1234$"     // ReferenceError: Cannot access 'appID' before initialization


// syntax error
// can be many reasons, but one is when you try to redeclare a let/const
let appID = "1234"
let appID = "5678"  // SyntaxError: Identifier 'appID' has already been declared

// type error
// can be many reasons, but one is when you try to update value of a const
const appKey = "alpha123"
appKey = "beta2345" //TypeError: Assignment to constant variable.