// METHOD - indexOf and lastIndexOf
// returns  numeric value

// FORM 1
// String.indexOf(searchstring) 
// String.lastIndexOf(searchstring)

// FORM 2
// String.indexOf(searchstring, search-start-position)
// String.lastIndexOf(searchstring, search-start-position)

// indexOf starts parsing the string from first index of string
// lastIndexOf starts parsing the string from last index of string

const str = 'banana Apple oranges abcdefghi Apple' // a regular string

console.log(`Length of string: ${str.length}`)

console.log(str.indexOf('hallelujah'))          // -1 // when search string not present, -1 returned
console.log(str.lastIndexOf('hallelujah'))      // -1 // when search string not present, -1 returned

console.log(str.indexOf('Apple'))       // 7   // first occurence of Apple when parsing from 0th index
console.log(str.lastIndexOf('Apple'))   // 31 // first occurence of Apple when parsing from last index

console.log(str.indexOf('apple'))       // -1  // indexOf is case sensitive
console.log(str.lastIndexOf('apple'))   // -1 // lastIndexOf is case sensitive

console.log(str.indexOf('Apple', 8))        // 31  // parsing L-> R, first occ at 31 when starting from 8th index
console.log(str.lastIndexOf('Apple', 30))   // 7   // parsing R-> L, first occ at 7 when starting from 30th index

console.log(str.indexOf(''))                // 0    // no idea
console.log(str.lastIndexOf(''))            // 36   // no idea

console.log(str.indexOf('Apple', -1))            // 7    // -1 auto convert to 0. L->R first occurence at 7th index
console.log(str.lastIndexOf('Apple', -1))       // -1   //  -1 auto convert to 0. R->L no strings left as 0 last index 
                                                        //   when parse R-> L



