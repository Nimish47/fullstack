// validate of a property exist in an object
// traditional approach: dot and [] way

// create an object that has a _proto_ = an object
const obj = Object.create({country: 'Australia', city: 'Brisbane'})
obj.name = 'Mark Waugh',
obj.profile = 'Cricketer'

// print object
console.log(obj)                                        // {name: 'Mark Waugh', profile: 'Cricketer'}

// CASE: simple scenario : own property check - good
console.log(obj.name)                                   // Mark Waugh


// CASE: issue : if not found in own, checks __proto__
// misleading  as follows Lookup approach
console.log(obj.country)                                // Australia