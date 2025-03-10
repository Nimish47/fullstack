// METHOD - join

// convert array into a string
// by default, all array items joined with seperator (if nothing entered, by default comma)
// original array untouched
// arr.join(seperator)
// returns a string

const arr = ["Golf","Squash","Polo"]

console.log(arr.join())             // "Golf,Squash,Polo"
console.log(arr.join(''))           // "GolfSquashPolo"
console.log(arr.join('-'))          // "Golf-Squash-Polo"