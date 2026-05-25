// validate if a property exist in an object
// static method => hasOwn way
// best

// create an object that has a proto as another object
const obj = Object.create({country: 'Australia', city: 'Brisbane'})
obj.name = 'Mark Waugh',
obj.profile = 'Cricketer'

// print object
console.log(obj)                                                   // {name: 'Mark Waugh', profile: 'Cricketer'}

// CASE: simple scenario - own property check
console.log(Object.hasOwn(obj,'name'))                              // true

// CASE: does it check __proto__ - NO (good)
console.log(Object.hasOwn(obj,'country'))                         // false

// CASE: issue solved - null proto
// a static method - does not depend on proto chain
const obj2 = Object.create(null)
obj2.name = 'Glenn Philips'
console.log(Object.hasOwn(obj, 'name'))                           // true 






