// validate if incoming value is a function

function util(val) {
    return typeof val === 'function'
}

console.log(util(()=> {}))                      // true
console.log(util(function (){}))                // true
console.log(util(class User{}))                 // true             // yes classes are also function
console.log(util(null))                         // false
console.log(util(undefined))                    // false
console.log(util({}))                           // false
console.log(util(Object))                       // true             // constructor fn, remember