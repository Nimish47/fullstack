// METHOD - find

// iterates array items and stops immediately if callback function returns true
// if callback function returns true, execution stops and that array element returned
// arr.find((item)=> {...find logic})
// returns the matched array entry - whatever the datatype it is
// if no match occurs, undefined returned

const arr = ["apple", "oranges", "bananas", "grapes", "bananas"]
const newArr= arr.find((item) => item === "bananas")
const newArr2= arr.find((item) => item === "kiwi")
console.log(newArr)             // "bananas"
console.log(newArr2)            // undefined