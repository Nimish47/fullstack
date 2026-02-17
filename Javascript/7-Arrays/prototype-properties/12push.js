// METHOD - push

// used to add one or more elements into an array at end (length-1)th index
// we can add one/multiple values in array
// arr.push(value1,value2,...)
// to push an "array" of values make sure to spread them first
// modifies original array
// returns new length of array

const arr = ["mango", "orange", "banana"]

arr.push("berry")
console.log(arr)                    // [ 'mango', 'orange', 'banana', 'berry' ]

arr.push("papaya", "sugarcane")      // [ 'mango', 'orange', 'banana', 'berry', 'papaya', 'sugarcane' ]
console.log(arr)

arr.push(["apple", "kiwi"])          // incorrect way,spread them first
console.log(arr)                    // ['mango','orange','banana','berry','papaya','sugarcane',[ 'apple', 'kiwi' ]]

