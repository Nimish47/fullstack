// understand promise chaining - with diff values from .then handler

// show how  .then() is essentially -> Promise.resolve(value)

// a fulfilled promise object with value as undefined
const obj1 = Promise.resolve()
const obj2 = Promise.resolve("papaya")


// CASE A: then returns a normal value
obj2
    .then(() => "apple")            // Promise.resolve("apple")
    .then(data => console.log(data))            // apple


// CASE B: then returns nothing
obj1
    .then()
    .then(data => console.log(data))            // undefined


// C: then returns promise
obj1
    .then(()=> obj2)
    .then(data => console.log(data))            // papaya
