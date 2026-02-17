// METHOD - split
// String.split(seperator)
// returns an array of string(s)

// everytime a match occurs of seperator and substring, left substring stored as new entry in array
// the seperator is not present in array's values however
// an individual 'string' gets split into an 'array of strings' based on seperator defined

const  str = 'My name is Grimmer!'

// if no seperator, whole string returned in array's 0th index i.e no seperation
console.log(str.split())            // [ 'My name is Grimmer!' ]

// if seperator = '' (or empty string), then seperation done of each character in string
console.log(str.split(''))      
/* [
  'M', 'y', ' ', 'n', 'a',
  'm', 'e', ' ', 'i', 's',
  ' ', 'G', 'r', 'i', 'm',
  'm', 'e', 'r', '!'
] */

// seperation done whenever <space> or ' ' encountered
console.log(str.split(' '))         // [ 'My', 'name', 'is', 'Grimmer!' ]

// seperation done whenever 'n' encountered
console.log(str.split('n'))         // [ 'My ', 'ame is Grimmer!' ]

// if no match, entire string returned in arrays 0th index
console.log(str.split('$'))         // [ 'My name is Grimmer!' ]