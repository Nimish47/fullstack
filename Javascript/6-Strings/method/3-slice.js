// METHOD - slice
// returns a string

// String.slice(start,stop) - Form 1
// String.slice(start) - Form 2

// by default stop = str.length - 1

const str = "Hello my name is Pratap"

// if no stop defined, stop = str.length -1 (i.e last index of string)
console.log(str.slice(5))       // my name is Pratap

// if start = stop, empty string
console.log(str.slice(5,5))     // ''

// below indexes translate to [1,4) , i.e 4th index is not included 
console.log(str.slice(1,4))     // ell

// if start > stop, empty string
console.log(str.slice(4,1))     // ''

// negative values of indexes work differently in slice
// two types of indexes used when working with slice
// Type 1 : 0 -> length-1 (L->R)
// Type 2 : -1 -> -(length) (R->L)
// HELLO
// Type 1 : {0:H,1:E,2:L,3:L,4:0}
// Type 2 : {-5:H,-4:E,-3:L,-2:L,-1:0} 

// as per scale above -1 comes after 4 in string, hence stop > start as per previous scenario, '' returned
// start > stop
console.log(str.slice(-1,4))    // ''

// start < stop: [4,-1)
console.log(str.slice(4,-1)) // o my name is Prata

// any NAN value of translates to 0 behind the scenes
console.log(str.slice(NaN,4))   // Hell