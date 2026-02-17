// validate of a property exist in an object - in operator
// 'in' operator

// cretate an object that has a proto as another object
const obj = Object.create({country: 'Australia', city: 'Brisbane'})
obj.name = 'Mark Waugh',
obj.profile = 'Cricketer'

// print object
console.log(obj)                                               // {name: 'Mark Waugh', profile: 'Cricketer'}

// CASE: simple scenario : own property check - good
console.log('name' in obj)                                     // true


// CASE: issue : if not found in own, checks __proto__
// misleading  as follows Lookup approach
console.log('country' in obj)                                  // true