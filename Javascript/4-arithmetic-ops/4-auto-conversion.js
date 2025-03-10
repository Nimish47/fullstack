// type conversions when dealing with arithmetic operators
// operators covered: + and *

let a1 = 1 + 2           // 3 
let a2 = 1 + "2"         // '12'
let a3 = "1" + 2         // '12'
let a4 = "1" + 2 + 3     // '123'
let a5 = 1 + 2 + "3"     // '33'

console.table([a1, a2, a3, a4, a5])

let b1 = 1 * 2           //  2
let b2 = 1 * "2"         // 2
let b3 = "2" * 2         // 4
let b4 = "2" * 2 * 3     // 12
let b5 = 1 * 2 * "3"    // 6

// all above values converted to number

console.table([b1, b2, b3, b4, b5])
console.table([typeof b1, typeof b2, typeof b3, typeof b4, typeof b5])