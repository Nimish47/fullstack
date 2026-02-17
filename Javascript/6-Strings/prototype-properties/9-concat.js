// METHOD - concat
// String.concat(String1,String2...)
// returns a new string
// used to concatenate multiple strings into one.

const str1 = 'Hi There!'
const str2 = "My name is Thogdan."
const str3 = "I am the United States."

console.log(str1.concat(str2, str3))             // Hi There!My name is Thogdan.I am the United States.
console.log("Good".concat(" ", "morning"))       // Good morning

// + operator can de the same thing as concat method
// + operator is much faster than concat

console.log(str1 + str2 + str3)                  // Hi There!My name is Thogdan.I am the United States.