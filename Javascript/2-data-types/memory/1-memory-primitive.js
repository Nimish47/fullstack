// how primitive types are stored in memory
// we will understand this by cloning the variable and trying to update it

const a = 12
const b = "hello"

let a_copy = a      //"a_copy" now points to a copy of "a" variable, and not the original "a"  
let b_copy = b      //"b_copy" now points to a copy of "b" variable, and not the original "b" 

a_copy = 18         // update value of copy reference
b_copy = "world"    // update value of copy reference

console.log(a)          // 12 //original preserved
console.log(a_copy)     // 18
console.log(b)          // hello // original preserved
console.log(b_copy)     // world 