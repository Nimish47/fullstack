// best way to compare anything in entire JS
// Object.is(any,any)
// static method
// cover more edge cases than ===
// slower performance than ===

// prims => value/type/both equality
// non-prims => referential equality

// CASE: compare two primitives
console.log(Object.is(2, 2))                        // true
console.log(Object.is("apple", "apple"))            // true
console.log(Object.is(2, "2"))                      // false

// CASE: compare two non-primitives
console.log(Object.is({}, {}))                      // false


// CASE: compare two non-primitives
const obj = { id: 23 }
console.log(Object.is(obj, obj))                    // true