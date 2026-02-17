/*
SCENARIO: Delete key-value or keys/values pairs of an object?
- below method works only for shallow objects as copy type is shallow
- const { deletekey1, deletekey2, ...newobject } = originalobject
- newobject now contains all properties of oldobject except deletekey1 and deletekey2
- we can delete as many keys as possible
*/

/**
 * An alternate is to use 'delete' keyword but it modifies original reference
 */

/**
 * An alternate is to:
 * first do a copy of object - can be any shallow or deep copy
 * use delete keyword on copied object
 * this strategy will be helpful for both - shallow and deep level objects
 */

let obj = {
    city: "Kolhapur", state: "Maharashtra",
    country: 'india', pincode: '801301'
}

let { city, pincode, ...newObj } = obj

console.log(newObj)    // { state: 'Maharashtra', country: 'india' }
console.log(obj)       // { city: 'Kolhapur', state: 'Maharashtra', country: 'india', pincode: '801301'}
