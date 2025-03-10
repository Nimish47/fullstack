// Primitive datatype - String


const str1 = "1 A primitive strinG"
const str2 = `2 Another primitive string`
const str3 = new String("3 A string object")

console.log(typeof str1)    // string
console.log(typeof str2)    // string
console.log(typeof str3)    // object

console.log(str1[0])    // 1
console.log(str2[0])    // 2
console.log(str3[0])    // 3

console.log(`Last character: ${str1[str1.length - 1]}`)     // G

// str1 and str2 are primitive strings
// str3 is an object string

// behind the scenes, primitive strings get converted to object strings
// that's why we can access string properties on primitive strings
// thats also why we can access 0th, 1st,...nth key of primitive strings
// const string = "hello" (how they are stored?)
// {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}


