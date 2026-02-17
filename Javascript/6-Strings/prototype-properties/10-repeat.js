// METHOD - repeat

// String.repeat(count)
// count means number of times string should repeat
// returns a string

const str = "Hello"

// count cannot be negative
console.log(str.repeat(-1))     //   Crashes with error -> RangeError: Invalid count value

// count = 0 results in empty string
console.log(str.repeat(0))         // '' 

// count = 1 means string won't get repeated
console.log(str.repeat(1))         // Hello 

// string repeated twice
console.log(str.repeat(2))         // HelloHello 

// count cannot be infinity
console.log(str.repeat(1/0))       //   Crashes with error -> RangeError: Invalid count value  