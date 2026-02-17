// validate incoming value is a object {}
// empty object not allowed 


function util(val) {
    if (val === null) return false                                          // cond1
    if (typeof val !== 'object') return false                               // cond2
    if (Object.getPrototypeOf(val) !== Object.prototype) return false       // cond3
    return Object.keys(val).length > 0                                      // cond4 // empty obejct check
}     

// Explantion 
// cond1 - why seperate condition for null
// typeof null === 'object'             // true
// object.getPrototypeoF(null)          // throws error

// cond2 and cond3 are both needed
// ex: []
    // typeof [] === 'object'                                     true
    // Object.getPrototypeOf([]) !== Object.prototype             false
// ex: obj = Object.create(Array.prototype) 
    // typeof obj  === 'object'                                   true
    // Object.getPrototypeOf(obj) !== Object.prototype            false  


// TEST
console.log(util({id: 23}))                                     // true
console.log(util({}))                                           // flase (since empty)
console.log(util(Object.create(Object.prototype)))              // false (since empty)
console.log(util(Object.create({})))                            // false (important) (proto equals another object)
console.log(util(Object.create({id: 23})))                      // false (important) (proto equals another object)
console.log(util(Object.create(Array.prototype)))               // false
console.log(util([]))                                           // false
console.log(util(null))                                         // false
console.log(util(undefined))                                    // false
console.log(util())                                             // false
console.log(util('abc'))                                        // false