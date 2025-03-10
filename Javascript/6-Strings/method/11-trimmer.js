// METHOD - trimStart | trim | trimEnd

// String.trimStart() - trim whitespace at the start of string
// String.trimEnd() - trim whitespace at the end of string
// String.trim() - trim whitespace at start and end of string

// whitespaces are trimmed at start and end of string and not in between
// returns a string

const str = "   My name is Varan   "

console.log(str.trimStart())        //"My name is Varan"

console.log(str.trimEnd())          //"   My name is Varan"

console.log(str.trim())             //"My name is Varan   "  