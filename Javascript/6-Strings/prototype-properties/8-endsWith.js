// METHOD - endsWith
// String.endsWith(searchstring)
// String.endsWith(searchstring,length)
// by default length = str.length
// if length defined, means mainstring trimmed to specified length and search opn performed on trimmed string
// returns a boolean


const str = "What a beautiful day!"

// searchstring = undefined, main string does not end with undefined, hence false
console.log(str.endsWith())                   // false

// mainstring not end with "hello"
console.log(str.endsWith("hello"))            // false

// mainstring ends with "day!"
console.log(str.endsWith("day!"))             // true

// mainstring trimmed upto length 6, trimmed mainstring doesn't ends with  "day!"
// trimmed main string = "What a"
console.log(str.endsWith("day!",6))      // false
console.log(str.endsWith("a",6))        // true