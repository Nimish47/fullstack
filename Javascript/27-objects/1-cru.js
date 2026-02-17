// Create
// Read
// Update
// with dot(.) and []


// a sample object
const obj = { id: 123, profile: 'hidden' }


// SCENARIO: CRU with .
obj.age = 22
obj.profile = 'visible'
console.log(obj.profile)            // visible

// SCENARIO: issue with .
// multi-word key
// obj.first Name = 'Karan'         // error

// SCENARIO: CRU with []
// same as .
obj['age'] = 32
console.log(obj['age'])            // 32


// SCENARIO:  [] solves . issue
// multi-word key possible
obj['first Name'] = 'Nishant'
console.log(obj['first Name'])      // Nishant


// print final object
console.log(obj)                    // {id: 123, profile: 'visible', age: 32, first Name: 'Nishant'}