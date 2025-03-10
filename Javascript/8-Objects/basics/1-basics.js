/**
 * Objects basics
 * 
 */

const { log } = console

// create object
let employee = {
    employeeId: 123,
    firstName: 'Anshul Pandey',
    age: 20,
    address: { district: 'Purnia' }
}

// GET property
log(employee.firstName)     // Anshul Pandey

// add property
employee.company = 'Wipro'
log(employee)
// {
//     employeeId: 123,
//     firstName: 'Anshul Pandey',
//     age: 20,
//     address: { district: 'Purnia' },
//     company: 'Wipro'
//   }

// check property if exist
console.log('age' in employee)     // true
console.log('dob' in employee)     // false

// looping
// for in works
// for of won't work
// forEach won't work
for (const item in employee) { log(`Key: ${item} Value: ${employee[item]}`) }
// Key: employeeId Value: 123
// Key: firstName Value: Anshul Pandey
// Key: age Value: 20
// Key: address Value: [object Object]
// Key: company Value: Wipro

// delete property
delete employee.age
console.log(employee)
// {
//     employeeId: 123,
//     firstName: 'Anshul Pandey',
//     address: { district: 'Purnia' },
//     company: 'Wipro'
//   }
