// METHOD - concat

// concatenates multiple arrays/values to mainArray
// returns a new array (original array untouched)
// mainArray.concat(value1,value2,arr1,arr2,....)

const arr = ["apple","oranges","strawberry"]
const arr2 = ["papaya", "kiwi"]
const newArr = arr.concat("banana", arr2)
console.log(newArr)  // [ 'apple', 'oranges', 'strawberry', 'banana', 'papaya', 'kiwi' ]