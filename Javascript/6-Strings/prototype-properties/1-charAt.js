// METHOD - charAt
// String.charAt(index)
// returns a character value or undefined (present at certain index)

// line 10 and 11 are same.
// Accessing values via charAt - str.charAt(index)
// Accessing values via [] - str[index]
const str1 = 'Apple Banana'
console.log(str1.charAt(4))     // e
console.log(str1[4])            // e
console.log(str1[-1])           // undefined //when index number is negative, undefined returned