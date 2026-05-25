// METHOD - find

// iterates array items and stops immediately if callback function returns true
// if callback function returns true, execution stops and that array element returned
// arr.find((item)=> {...find logic})
// returns the matched array entry - whatever the datatype it is
// if no match occurs, undefined returned

const arr = ["apple", "oranges", "bananas", "grapes", "bananas"]
const data1= arr.find((item) => item === "bananas")
const data2= arr.find((item) => item === "kiwi")
console.log(data1)             // "bananas"
console.log(data2)             // undefined