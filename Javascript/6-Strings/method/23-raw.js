// METHOD - raw

const country = 'india'
const str1 = `C:\Users\OneDrive\nishant\today\reference\${country}`
console.log(str1)
/*
C:UsersOneDrive
eferenceoday
*/

// in browser
// 'C:UsersOneDrive\nishant\today\reference${country}'


const rawString = String.raw`C:\Users\OneDrive\nishant\today\reference\${country}`

console.log(rawString)      // C:\Users\OneDrive\nishant\today\reference\${country}