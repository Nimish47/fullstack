// What happens when we copy a string and update the copy string
// Will the original string get updated?

const a = "hello"
console.log(a)          // hello
console.log(a[0])       // h
console.log(typeof a)   // string

const b = new String("hello")
console.log(b)           // [String: 'hello'] 
console.log(b[0])       // h
console.log(typeof b)  // object

// a stores the primitive value "hello".
// When you do a_copy = a, the value "hello" is copied, not referenced like objects/arrays.
// Now both variables hold "hello", but independently (separate storage).
let a_copy = a 
let b_copy = b


a_copy = "world"       
b_copy = "world"       


console.log(`a: ${a} a_copy: ${a_copy}`)        
console.log(`b: ${b} b_copy: ${b_copy}`)       