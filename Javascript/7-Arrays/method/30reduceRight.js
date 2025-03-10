// METHOD - reduceRight

// everything same as reduce, only difference is that operation operates from last to first index

const arr = [1, 2, 3, 4]
const reducer = (prev, next) => prev + next

// WITH INITIAL VALUE
const sum1 = arr.reduceRight(reducer, 5)
console.log(sum1)       // 15

// WITHOUT INITIAL VALUE 
const sum2 = arr.reduceRight(reducer)
console.log(sum2)       // 10

// reduce vs reduceRight
const arr2 = [1, 2, 3]
const subtract = (a, b) => a - b
console.log(arr2.reduce(subtract))              // -4
console.log(arr2.reduceRight(subtract))         //  0    