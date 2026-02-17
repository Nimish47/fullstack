// best way to deduce if incoming value(primitive/non-primitive) is non empty

// edge cases
    // []
    // empty/nothing
    // {}
    // null
    // ''
    // undefined
    // NaN, Infinity
    // allows number 0
    // anything else that comes in mind


function isNonEmpty(val) {
    if(val == null) return false                                                // null/undefined/nothing
    if(typeof val === 'number') return Number.isFinite(val)                     // number
    if(typeof val === 'string') return val.length > 0                           // string
    if(Array.isArray(val)) return val.length > 0                                // array
    if((val instanceof Set || val instanceof Map))  return val.size > 0         // map/set
    if(typeof val === 'object' && Object.getPrototypeOf(val) === Object.prototype)  return Object.keys(val).length > 0 //object

    return true
}

console.log(isNonEmpty())                               // false
console.log(isNonEmpty(null))                           // false
console.log(isNonEmpty(undefined))                      // false
console.log(isNonEmpty([]))                             // false
console.log(isNonEmpty({}))                             // false
console.log(isNonEmpty(''))                             // false
console.log(isNonEmpty(new Set()))                      // false
console.log(isNonEmpty(new Map()))                      // false
console.log(isNonEmpty(0))                              // true
console.log(isNonEmpty('apple'))                        // true
console.log(isNonEmpty([1,2,3]))                        // true




// theory

// The core truth (this is the mental model)
    // “Non-empty” is NOT a JavaScript concept.
    // It’s a business / semantic concept that you must define.
// JavaScript only gives you:
    // types
    // values
    // truthiness

// It does not give you “emptiness”.

// So any “perfect” non-empty check must:
    // Decide which types matter
    // Define what “empty” means per type
    // Encode those rules explicitly