// METHOD - substring
// returns a string

// String.substring(start,stop) - Form 1
// String.substring(start) - Form 2

// by default stop = str.length - 1

const str = "Hello my name is Pratap"

// if no stop defined, stop = str.length -1 (i.e last index of string)
console.log(str.substring(5))       // my name is Pratap

// if start = stop, empty string
console.log(str.substring(5,5))     // ''

// below indexes translate to [1,4) , i.e 4th index is not included 
console.log(str.substring(1,4))     // ell

// if start > stop, indexes are swapped behind the scenes
console.log(str.substring(4,1))     // ell

// any negative value of index translates to 0 behind the scenes
console.log(str.substring(-1,4))    // Hell

// any NAN value of translates to 0 behind the scenes
console.log(str.substring(NaN,4))   // Hell