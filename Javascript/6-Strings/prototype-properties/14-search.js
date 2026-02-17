// METHOD - search
// String.search(regex or string)
// regex search on a string
// returns index on first match
// returns -1 if not a match
// by default pattern search is case-sensitive

const str = 'No pain no gain with some AIN!'

// no match
console.log(str.search('hello'))                // -1

// match occured at index = 4
console.log(str.search('ain'))                  // 4

// match occured at index = 4
// this is how we write a regex expression
console.log(str.search(/ain/))                  // 4

// match occured at index = 26
console.log(str.search('AIN'))                  // 26

// case insensitive search -> /i
console.log(str.search(/AIN/i))                 // 4

// In regex, the letter "g" indicates that the regex should be tested against all possible matches in a string.
// no effect here as index of first match returned
console.log(str.search(/AIN/g))                 // 26
console.log(str.search(/AIN/gi))                // 4    
