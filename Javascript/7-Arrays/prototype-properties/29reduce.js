// METHOD - reduce

// sum of numbers

const arr = [1,2,3,4]
const reducer = (acc,item) => acc + item

// WITH INITIAL VALUE
const sum1 = arr.reduce(reducer,5)
console.log(sum1)       // 15

// WITHOUT INITIAL VALUE
const sum2 = arr.reduce(reducer)
console.log(sum2)       // 10