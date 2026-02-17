// loop an object
// 2 ways to loop - key and value


// create a loop
const obj = { fName: 'Karan', lName: 'Ajula', category: 'Artist', age: 38 }

// CASE: easiest way
// for-in loop
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;         // check for 'own' props only, not prototypal values
    console.log(obj[key])
}
// Karan
// Ajula
// Artist
// 38


// optimized way
// Object.* + traditional-for loop

let arr;

// CASE: optimized way to loop keys
arr = Object.keys(obj)
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}
// fName
// lName
// category
// age


// CASE: optimized way to loop values
arr = Object.values(obj)
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}
// Karan
// Ajula
// Artist
// 38


// CASE: optimized way to loop [key,value]
arr = Object.entries(obj)
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}
// [ 'fName', 'Karan' ]
// [ 'lName', 'Ajula' ]
// [ 'category', 'Artist' ]
// [ 'age', 38 ]