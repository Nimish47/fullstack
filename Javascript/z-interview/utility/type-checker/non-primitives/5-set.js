// validate incoming value is a set
// empty set not allowed


function util(val) { return val instanceof Set && val.size > 0}

// test case
console.log(util([]))                              // false
console.log(util(new Set()))                       // false         // empty
console.log(util(new Set([1,2,3])))                // true