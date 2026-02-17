// Pickup the practical usage problem 
// take 3 args
// implement using bind


// normal fn
const greeting = (greeting, name) => `${greeting}, ${name}`

// normally
const englishGreet = greeting('Hello', 'Arun')
const hindiGreet = greeting('Namaste', 'Binod')
const englishGreet2 = greeting('Hello', 'Piyush')                 // need to pass 'Hello' multiple times

console.log(englishGreet)                                       // Hello, Arun
console.log(hindiGreet)                                         // Namaste, Binod
console.log(englishGreet2)                                      // Hello, Piyush


// via partial way
const engGreet = greeting.bind(null, "Hello")                   // resuable
const hinGreet = greeting.bind(null, "Namaste")                 // resuable

console.log(engGreet("Arun"))                                           // Hello, Arun
console.log(hinGreet("Binod"))                                          // Namaste, Binod
console.log(engGreet("Piyush"))                                         // Hello, Piyush