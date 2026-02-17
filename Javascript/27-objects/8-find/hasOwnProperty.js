// validate of a property exist in an object
// prototype method => hasOwnProperty

// create an object that has a proto as another object
const obj = Object.create({country: 'Australia', city: 'Brisbane'})
obj.name = 'Mark Waugh',
obj.profile = 'Cricketer'

// print object
console.log(obj)                                            // {name: 'Mark Waugh', profile: 'Cricketer'}

// CASE: simple scenario - own property check
console.log(obj.hasOwnProperty('name'))                     // true

// CASE: does it check __proto__ - NO (good)
console.log(obj.hasOwnProperty('country'))                  // false

// CASE: issue - null proto
// hasOwnProperty not available via proto chain
const obj2 = Object.create(null)
obj2.name = 'Glenn Philips'
console.log(obj2.hasOwnProperty('name'))                  // error


