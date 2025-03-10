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

// create copy references - copy of string variable points to copy of original reference //case B
let a_copy = a 
let b_copy = b

// strings are immutable
// a_copy earlier pointing to copy of original a
// now a new "world" string create in memory, and a_copy points to it
// if we write:  a = "hoya"
    // a new "hoya" creted in memory and a points to it. 
    // "hello" which a was referencing earlier still exists in memory
    // however now it is no longer referenced by a

a_copy = "world"       // only a_copy gets updated, a remain the same
b_copy = "world"       // only b_copy gets updated, b remain the same


console.log(`a: ${a} a_copy: ${a_copy}`)        // a: hello a_copy: world
console.log(`b: ${b} b_copy: ${b_copy}`)        // b: hello b_copy: world