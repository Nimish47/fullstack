// String conversions - String(value) and typechecking

let a = String(2);  // '2'
let b = String(true); // 'true'
let c = String(null); // 'null'
let d = String(undefined) // 'undefined'
let e = String([1, 2, 3]) // '1,2,3'
let e1 = String([]) // ''
let f = String({ name: "Aakash" }) // '{ name: "Aakash" }'
let f1 = String({}) // '{}'

console.table([a, b, c, d, e, e1, f, f1])
