// validate incoming value is a true primitive - string
// empty string not allowed 

function util(val) {
    return typeof val === 'string' && val.length > 0
}


// TEST
console.log(util('apple'))                                      // true
console.log(util(''))                                           // false       // empty
console.log(util(' '))                                          // true        // not empty
console.log(util(23))                                           // false
console.log(util(0))                                            // false
console.log(util(new String(23)))                               // false
console.log(util(new Object("Apple")))                          // false
console.log(util(Object.create(String.prototype)))              // false    