// validate incoming value is a true primitive - number
// 0 passes
// NaN, Infinity fails

function util(val) {
    return typeof val === 'number' && Number.isFinite(val)
}

// Explantion - need for Number.isFinite(val)
    // Checks for    
        // NaN
        // Infinity

// TEST
console.log(util(23))                                       // true
console.log(util('23'))                                     // false
console.log(util(0))                                        // true
console.log(util(new Number(23)))                           // false
console.log(util(new Object(23)))                           // false
console.log(util(Object.create(Number.prototype)))          // false
console.log(util(NaN))                                      // false
console.log(util(Infinity))                                 // false