// how non-primitive types are stored in memory
// we will understand this by cloning the variable and trying to update it

const a = [1, 2, 3, 4]
const b = { name: "Nishant", age: 41 }
const c = function () { return "apple" }
const d = [{ name: "Arjun", age: 53 }]

console.log(a)      // [ 1, 2, 3, 4 ]
console.log(b)      // { name: 'Nishant', age: 41 }
console.log(c())    // "apple"
console.log(d)      // [ { name: 'Arjun', age: 53 } ]

let a_copy = a     // "a_copy" points to copied reference of "a" variable
let b_copy = b     // "b_copy" now points to original reference of "b" variable*
let c_copy = c     // "c_copy" points to copied reference of "c" variable
let d_copy = d     // "d_copy" now points to original reference of "d" variable*

//updating the copy variables
a_copy = ['a', 'b', 'c', 'd']
b_copy.name = "Nimish"
c_copy = function () { return "banana" }
// d_copy[0].name = "Karan"
d_copy[0] = {fruit: 'banana', count: 10}


console.log(`a: ${a} a_copy: ${a_copy} `)       // a: 1,2,3,4 a_copy: a,b,c,d 
console.log(`c: ${c()} c_copy: ${c_copy()} `)   // c: apple c_copy: banana 


console.log(b)          // { name: 'Nimish', age: 41 }
console.log(b_copy)     // { name: 'Nimish', age: 41 }

console.log(d)          // [ { fruit: 'banana', count: 10 } ]
console.log(d_copy)     // [ { fruit: 'banana', count: 10 } ]