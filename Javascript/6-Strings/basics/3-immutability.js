// Updating a string
// Is it possible?
// Strings behave like an array of characters


let a = "Xoya"
let b = "kimichi"

console.log(`a: ${a} b: ${b}`)                          // a: boya b: kimichi
console.log(`First index - a:${a[0]} b:${b[0]}`)        // First index - a:X b:k

// Strings are immutable in javascript
// "Xoya" and "kimichi" are created in memeory and they CANNOT be changed

a[0] = 'Y'      // it may seem we are trying to update X with Y here but thats not the case
                // a[0] does nothing as trying to modify a string is useless
                // a new character 'Y created' in memory. However it remains unattended as we are not storing it in a variable
                // To store it in a variable: const z = a[0] = 'Y'


b = 'Sushi'     // a new string 'Sushi' is created in memory and b references that.
                // "kimichi" still exists, however no one referncing it right now

console.log(a)      // Xoya
console.log(b)      // Sushi

