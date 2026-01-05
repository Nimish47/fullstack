'use strict'

// Agenda: "const" is a TRUE constant for primitives but not for non-primitives
// case
// discuss how const is not true constant for non-primitives like objects
// discuss best way to actually have a constant non-primitives - Object.freeze


// const with prims
const appName = "Yolo"
// appName = "Bushan"  // TypeError: Assignment to constant variable.

// const with non-prims
// not a "true" constant
const ltiEmployee = {
    fName: 'Anshu',
    age: 28,
    location: {
        state: 'JH',
        city: 'Jamshedpur'
    }
}
// allowed
ltiEmployee.age = 35
// console.log(ltiEmployee)

// not allowed
// ltiEmployee = {fName: 'priya'}  //TypeError: Assignment to constant variable.


// a true constant variable
// deep freeze
// write down Object.freeze features
// deep nested props further need to be object freezed else can be altered
const mindtreeEmployee = Object.freeze({
    fName: 'Leena',
    age: 28,
    location: Object.freeze({
        state: 'RJ',
        city: 'Kota'
    })
})

// only in strict mode
// TypeError: Cannot assign to read only property 'age' of object '#<Object>'
// without strict mode, value unchaged, but error not thrown
mindtreeEmployee.location.city = 'Sawai madhopur'   // not allowed in strict
mindtreeEmployee.age = 35   // not allowed in strict
console.log(mindtreeEmployee)