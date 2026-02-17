// METHOD - unshift

// used to add elements into an array at 0th index(start)
// we can add one/multiple values in array
// arr.unshift(value1,value2,...)
// to push an "array" of values make sure to spread them first
// modifies original array
// returns new length of array

const arr = ["mango", "orange", "banana"]

arr.unshift("berry")
console.log(arr)                    // [ 'berry', 'mango', 'orange', 'banana' ]

arr.unshift("papaya", "sugarcane")      // [ 'papaya', 'sugarcane', 'berry', 'mango', 'orange', 'banana' ]
console.log(arr)

arr.unshift(["apple", "kiwi"])          // incorrect way,spread them first
console.log(arr)                    // [[ 'apple', 'kiwi' ],'papaya', 'sugarcane', 'berry', 'mango', 'orange', 'banana' ]

