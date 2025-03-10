// Javascript library method  - Math.js

/**
 * Some commonly used Math functions
 * Math.round  : round off to closest whole number
 * Math.ceil   : round off to higher whole number
 * Math.floor  : round off to lower whole number
 * Math.ceil   : round off to higher whole number
 * Math.random : every time returns a random number b/w [0,1].
 * */

console.log(Math.round(5.4))        // 5
console.log(Math.round(5.6))        // 6

console.log(Math.ceil(5.4))         // 6
console.log(Math.floor(5.6))        // 5
    
console.log(Math.max(1, 2, 3, 5.3, 5))        // 5.3
console.log(Math.min(1, 2, 3, 4, 5))        // 1

console.log(Math.random())                          // 0.7964835096571223
console.log(Math.random() * 10)                     // 2.2887944294974583
console.log(Math.round(Math.random() * 10))         // 6