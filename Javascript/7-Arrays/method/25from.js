// METHOD - Array.from

// convert a array-like variable into Array
// array-like: 
    // something that has length property OR
        // length can be a property or explicitly declared
        // based on length value of incoming data type, length of new array will be decided
        // length of new array = incoming value of LENGTH 
    // something that can be accesed via indexes AND has length property
        // indexes need not be a number ( see obj11)

// Array.from(somevariable,optionalcallback)
// somevariable: array-like object
// optionalcallback: if we want to perform some opn, before storing data into each index of new array
// optionalcallback looks like: (item,index) => {logic}

// returns a new Array
// if not array-like obj, returns empty array
// original array-like untouched


const str = "Abdul"                         // strings: indexed AND length prop
const obj1 = { name: "Ricky", age: 23 }     // indexed but no length (object has no length property)
const obj11 = { name: "Ricky", age: 23, length: 2 }  // indexed AND length explicitly defined.
                                                     // Note here length is simply a key-value pair,
                                                     // won't update if more key-value pairs added in obj
const obj2 = { 0: "Hello", 1: "Buddy" }     // indexed but no length
const obj22 = { 0: "Hello", 1: "Buddy",length: 2 }     // indexed and length defined
const obj3 = { length: 5 }                  // length


console.log(Array.from(str))        // [ 'A', 'b', 'd', 'u', 'l' ]
console.log(Array.from(obj1))       // []
console.log(Array.from(obj11))      // [ undefined, undefined ]
console.log(Array.from(obj2))       // []

/*javascript able to understand what to put inside new array as indexes are  numbers*/
console.log(Array.from(obj22))      // [ 'Hello', 'Buddy' ]
/*javascript unable to understand what to put inside new array as indexes are not numbers. Use callback function */
console.log(Array.from(obj3))       // [ undefined, undefined, undefined, undefined, undefined ]

/*to have some valid value, use callback function - since indexes are not numbers */
/*_ means first param is not used */
const newArr1 = Array.from(obj3, (_, index) => index)
const newArr2 = Array.from(str, (item) => item.toUpperCase())

console.log(newArr1)        // [ 0, 1, 2, 3, 4 ]
console.log(newArr2)        // [ 'A', 'B', 'D', 'U', 'L' ]   




