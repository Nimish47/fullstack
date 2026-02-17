// incoming value is one of
    // null
    // undefined
    // nothing comes (js shows it as undefined)

function util(val) {
    return val == null                      // don't use ===
}


// TEST

console.log(util(undefined))                         // true
console.log(util(null))                              // true
console.log(util())                                  // true
console.log(util(0))                                 // false   // 0 will pass
console.log(util(''))                                // false   // '' will pass
console.log(util([]))                                // false   // [] will pass
console.log(util({}))                                // false   // {} will pass