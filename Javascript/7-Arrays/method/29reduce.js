// METHOD - reduce

// arr.reduce(reducerFunc, initialValue:optional)

// used to perform some kind of operation on array values and yeild a result [ex- sum of all elements of array etc]
// how reduce works? check diagram
// reducerFunc takes two params - prev and next [check diagram to how it works]
// returns a primitive or non primitive value
// original array untouched

const arr = [1,2,3,4]
const reducer = (prev,next) => prev + next

// WITH INITIAL VALUE
const sum1 = arr.reduce(reducer,5)
console.log(sum1)       // 15

// WITHOUT INITIAL VALUE
const sum2 = arr.reduce(reducer)
console.log(sum2)       // 10