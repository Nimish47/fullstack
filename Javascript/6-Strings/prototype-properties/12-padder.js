// METHOD - padStart | padEnd

// String.padStart(targetLength)
// String.padStart(targetLength, padString)

// String.padEnd(targetLength)
// String.padEnd(targetLength, padString)

// targetLength is the aspiring length of resultant string.
// padString is what gets concatenated either at start or last of input string until targetLength is reached 
// returns a string

const str = "abc"

// if no target string, empty space added until target length reached
console.log(str.padStart(10))                       // '       abc'

// how padString gets added to input string
// step 1:  padstring: '123' input string = 'abc' length = 3
// step 2:  padstring: '123' resultstring = '123abc' length = 6
// step 2:  padstring: '123' resultstring = '123123abc' length = 9 // note the new '123' got appended right before a and not 1  
// step 3:  padstring: '123' resultstring = '1231231abc' length = 10 // target-length-limit reached so only 1 added. 
console.log(str.padStart(10, '123'))                // '1231231abc'


console.log(str.padStart(10, '12345678'))           // '1234567abc'

// if targetlength < inputstring.length, nothing happens and input string returned
console.log(str.padStart(2))                        // 'abc'

// padEnd - same as padStart only operations done at end of string
const str2 = 'abc'

console.log(str2.padEnd(10))                       // 'abc       ' 
console.log(str2.padEnd(10, '123'))                // 'abc1231231'
console.log(str2.padEnd(10, '12345678'))           // 'abc1234567'
console.log(str2.padEnd(2))                        // 'abc'


