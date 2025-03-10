// Boolean conversions - Boolean(value) and typechecking

let a = Boolean(2);  // true
let b = Boolean("apple"); // true
let b1 = Boolean(""); // false
let c = Boolean(true); // true
let d = Boolean(null); // false
let e = Boolean(undefined) // false
let f = Boolean([1, 2, 3]) // true
let f1 = Boolean([]) // true
let g = Boolean({ name: "Aakash" }) // true
let g1 = Boolean({}) // true

console.table([a, b, b1, c, d, e, f, f1, g, g1])
