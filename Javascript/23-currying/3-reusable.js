// example 2 - reusablitity using currying
// Create a curried function that creates personalized greeting functions:

// normal fn
const greeting = (greeting, name) => `${greeting}, ${name}`

// without curry
const englishGreet = greeting('Hello', 'Arun')
const hindiGreet = greeting('Namaste', 'Binod')
const englishGreet2 = greeting('Hello', 'Piyush')                 // need to pass 'Hello' multiple times

console.log(englishGreet)                                       // Hello, Arun
console.log(hindiGreet)                                         // Namaste, Binod
console.log(englishGreet2)                                      // Hello, Piyush


// with curry
const curryGreeting = greeting => name => console.log(`${greeting}, ${name}`)
const engGreet = curryGreeting('Hello')            // reusable
const hinGreet = curryGreeting('Namaste')          // reusable

engGreet("Arun")                // Hello, Arun
hinGreet("Binod")               // Namaste, Binod
engGreet("Piyush")              // Hello, Piyush
