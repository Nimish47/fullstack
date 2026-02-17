// METHOD -startsWith
// String.startsWith(searchstring)
// String.startsWith(searchstring,startindex)
// by default startindex = 0
// returns a boolean


const str = "What a beautiful day!"

// searchstring = undefined, main string does not start with undefined, hence false
console.log(str.startsWith())                   // false

// mainstring not starts with "hello"
console.log(str.startsWith("hello"))            // false

// mainstring starts with "What"
console.log(str.startsWith("What"))             // true

// when searching from index = 7, mainstring starts with "beautiful"
console.log(str.startsWith("beautiful",7))      // true