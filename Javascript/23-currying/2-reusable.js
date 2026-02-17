// example 1 - reusablitity using currying
// Create a curried function to check age eligibility:
// age >= requiredAge ?

// Example:
// const is18Plus = ?
// is18Plus(20) // true
// is18Plus(16) // false


// without curry
const ageValidator = (age, requiredAge) => age >= requiredAge
const isTeen = ageValidator(23, 18)
const isAdult = ageValidator(13, 30)
const isTeen2 = ageValidator(17, 18)                 // need to pass 18 multiple times
console.log(isTeen, isAdult, isTeen2)                // true false false


// with curry
const curryAgeValidator = requiredAge => age => console.log(age >= requiredAge)
const is18 = curryAgeValidator(18)          // reusable
const is30 = curryAgeValidator(30)          // reusable

is18(23)   // true
is30(17)   // false
is18(17)   // false

