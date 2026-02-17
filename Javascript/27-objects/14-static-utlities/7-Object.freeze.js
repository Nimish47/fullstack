// Object constructor static property - Object.freeze
// using this properly we can make it a 'true' const

// sample object
const obj = { fName: 'Karan', age: 25, addr: { lat: '123', long: 'ABCD' } }


// CASE: seal object
Object.freeze(obj)


// CASE: cannot add property
obj.lName = 'Nimish'
console.log(obj)                                // { fName: 'Karan', age: 25, addr: { lat: '123', long: 'ABCD' } }


// CASE: cannot update existing 
obj.fName = 'Nishant'
console.log(obj)                                // { fName: 'Karan', age: 25, addr: { lat: '123', long: 'ABCD' } }


// CASE: deletion not allowed
// won't throw error but nothing will happen
delete obj.fName
console.log(obj)                                // { fName: 'Karan', age: 25, addr: { lat: '123', long: 'ABCD' } }


// CASE: nested properties can be updated
obj.addr.lat = 999
console.log(obj)                                // { fName: 'Karan', age: 25, addr: { lat: 999, long: 'ABCD' } }


// CASE: How to make a true 'const'?
// freeze at all levels of nesting

const perfectObj = Object.freeze({
    fName: 'Karan',
    age: 25,
    addr: Object.freeze({ lat: '123', long: 'ABCD' })
})

// can't update nested props now
perfectObj.addr.lat = 999
console.log(perfectObj)                             // { fName: 'Karan', age: 25, addr: { lat: '123', long: 'ABCD' } }