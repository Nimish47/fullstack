// validate incoming value is an array
// empty array not allowed


function util(val) { return Array.isArray(val) && val.length > 0 }

// test case
console.log(util([]))               // false
console.log(util([1, 2, 3]))          // true
console.log(util())                 // false
console.log(util({}))               // false
console.log(util('abc'))            // false
console.log(util(null))             // false