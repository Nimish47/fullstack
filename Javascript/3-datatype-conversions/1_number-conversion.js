// Number conversions - Number(value) and typechecking


let a = Number(2);  //returns number 2
let b = Number("apple"); // returns NaN
let c = Number(true); //* returns number 1 
let d = Number(null); //* returns number 0
let e = Number(undefined) // returns value NaN
let f = Number([1, 2, 3]) // returns value NaN
let g = Number({ name: "Aakash" }) // returns value NaN

console.table([a, b, c, d, e, f, g])

console.log(typeof NaN) //returns number



