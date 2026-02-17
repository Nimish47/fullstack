// Auto-boxing
// THESE ARE TRUE PRIMITIVES
// still we can use methods on these because of auto-boxing
// __proto works too on them

// CASE: create true number primitive
// try and access Number.prototype property
const str = "hello"
console.log(str.toLocaleUpperCase())                    // HELLO


// CASE: create true string primitive
// try and access String.prototype property
const num = 4.1234
console.log(num.toFixed(1))                             // 4.1