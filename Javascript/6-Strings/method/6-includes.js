// METHOD - includes
// String.includes(searchstring) - FORM 1
// String.includes(searchstring,search-start-index) - FORM 2

// by default search-start-index = 0
// returns boolean
// search for a string inside main string. if finds it, returns true, else false
// search is case sensitive
// at least one occurence is needed for result to be true

const str = 'My name is Nishant Nimish'

// search string is undefined, so false
console.log(str.includes())                 // false

// exact reason don't know
console.log(str.includes(''))               // true

// search string not present in main string
console.log(str.includes('bonjour'))        // false

// search string present in main string
console.log(str.includes('name'))           // true

// search string not found. search started from index 5
console.log(str.includes('name', 5))        // false

// search string found. search started from index 3
console.log(str.includes('name', 3))        // true

// negative value of index translates to 0
console.log(str.includes('name', -3))       // true

