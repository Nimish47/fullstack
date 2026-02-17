// validate incoming value is a map
// empty map not allowed


function util(val) { return val instanceof Map && val.size > 0}

// test case
console.log(util([]))                              // false
console.log(util(new Map()))                       // false         // empty