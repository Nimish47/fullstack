// Creating arrays with and without "new" and comparisons


// CASE: literal way (best)
// []
// analyze __proto__
const arr = []
console.log(arr.__proto__)          // Array.prototype
// arr.map                          //possible


// CASE: via new Array(1,3,4)
// analyze __proto__
// discussed => refers Array.prototype


// CASE: issue with new Array()
// discussed