// METHOD - keys

// arr.keys()
// returns an ITERABLE that contains all indexes of array

// returns an ITERABLE(not array) that can be accessed by:
    // for of loop (best)
    // spread operator (there's a catch - check 2 vs 2.1)
// original array untouched    

const arr = ["apple", "oranges", "pineapple"]
const keys = arr.keys()

console.log(typeof keys)        // object

// way 1 - for of loop - WORKS!
for (const item of keys) {
    console.log(item)
}
/*
0
1
2
*/

// way 2.1 - spread operator - DOESN'T WORK
const keyArr1 = [...keys]           
console.log(keyArr1)                // []

// way 2.2 - spread operator - WORKS   
const keyArr2 = [...arr.keys()] 
console.log(keyArr2)                // [ 0, 1, 2 ]
