// Method - toFixed()

// Number.toFixed(limit)
// used to limit decimal digits of a number
// if no decimal digits like num2, will add any number zeroes

const num1 = 3.14285628976
const num2 = 10

console.log(num1.toFixed(2))         // 3.14
console.log(num1.toFixed(3))         // 3.142

console.log(num2.toFixed(1))         // 10.0
console.log(num2.toFixed(2))         // 10.00

