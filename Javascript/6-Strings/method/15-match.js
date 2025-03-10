// METHOD - match
// String.match(regex or string)
// regex match on a string
// returns an array
    // Case 1: if /g not used: returns array containing details of first match same as search
    // Case 2: if /g used: returns array of matches

// returns null if not a match
// by default pattern match is case-sensitive

// match is very similar to search, but if /g used in regex, match returns array of all matches
// in that way we can count number of times our match happened.

const str = 'No pain no gain with some AIN!'

// no match
console.log(str.match('hello'))                // null

// match occured at index = 4
console.log(str.match('ain'))
/*
[
  'ain',
  index: 4,
  input: 'No pain no gain with some AIN!',
  groups: undefined
]
*/

// match occured at index = 4
// this is how we write a regex expression
console.log(str.match(/ain/))
/*
[
  'ain',
  index: 4,
  input: 'No pain no gain with some AIN!',
  groups: undefined
]
*/


// match occured at index = 26
console.log(str.match('AIN'))

/*
[
  'AIN',
  index: 26,
  input: 'No pain no gain with some AIN!',
  groups: undefined
]
*/

// case insensitive search -> /i
console.log(str.match(/AIN/i))
/*
[
  'ain',
  index: 4,
  input: 'No pain no gain with some AIN!',
  groups: undefined
]
*/


// In regex, the letter "g" indicates that the regex should be tested against all possible matches in a string.
// only one match found
console.log(str.match(/AIN/g))                 // [ 'AIN' ]

// case insesitive match
// three times match occured
// very good if we want to know how many times match occured
console.log(str.match(/AIN/gi))                // [ 'ain', 'ain', 'AIN' ]    
