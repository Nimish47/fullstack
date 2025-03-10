// METHOD - isArray

// used to check data-type is array or not
// typeof is very general - it returns array type as "object". 
// in order to be more specific, we use Array.isArray
// Array.isArray(arr)
// returns a boolean
// array created by both [] and new Array keyword, both return true with Array.isArray(arr)
// original array untouched

const arr1 = [1, 2, 3, 4]
const arr2 = new Array(1, 2, 3, 4)
const arr3 = [{ name: 'Arvind', age: 18 }, { name: 'Parshuram', age: 55 }]

console.log(typeof arr1)            // object
console.log(typeof arr2)            // object
console.log(typeof arr3)            // object

console.log(Array.isArray(arr1))    // true    
console.log(Array.isArray(arr2))    // true
console.log(Array.isArray(arr3))    // true