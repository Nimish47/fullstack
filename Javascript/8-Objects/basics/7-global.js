// The Global Object in Javascript (Node.js)
// The global object provides variables and functions that are available anywhere.
    // We can directly use properties and methods provided OR
    // we can add our own properties as well as methods (custom) into a global object [NOT RECOMMENDED]
// Traditionallly global object had a different name for different runtime environment:
    // Browser: window
    // Nodejs: global
// In modern approach,
    // All environemnts: globalThis
// In the browser, you are always running inside the window object. (now globalThis)
// In Node and Node-like environments, you are always running inside global. (now globalThis)  
// They act as the container for everything,and hold many of the other built-in objects and functions,like console.  
// Usually, you shouldn’t put any extra custom things into them—it’s bad design.  


// both are same
console.log(global)
console.log(globalThis)

// adding a custom property to global object (NOT RECOMMENDED)
globalThis.PUBLIC_KEY = '1234ABCD'
console.log(globalThis)     // contains new property PUBLIC_KEY