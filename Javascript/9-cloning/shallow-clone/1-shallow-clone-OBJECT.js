/**
 * SHALLOW CLONE OF AN OBJECT
 *    - using spread operator
 *          - let copy_obj = {...obj}
 *          - if object property's value = primitive type, it is copied by value
 *                - hence, updating such a property (primitive) won't modify original object
 *          - if object property's value = non-primitive type, it is copied by reference
 *                - hence, updating such a property (non-primitive) modifies original object  
 *                - to simplify things we say, it does a shallow copy
 *              - SHALLOW COPY:
 *                   - one level deep elements are copied by value
 *                        - it means if one-level deep copy elements are modified, original object remains same
 *                   - deeper elements (level >1) are copied by reference
 *                        - it means if deeper copy elements are modified, original object also modified       
 *    - using assignment operator
 *          - let copy_obj = obj
 *          - assignment operation to copy an object in JS : it only leads to creating a reference to the same object!
 *          - each object property's value - whether primitive or non-primitive is referenced
 *          - hence, updating the copy object's property value modifies original object
 *          - this way is copy by reference (shallow copy is different)
 *  */



const obj1 = { firstName: 'Amit', location: { lat: '303', long: '432' } }
const obj2 = { firstName: 'Amit', location: { lat: '303', long: '432' } }

// clone - spread opr
let shallowCopyViaSpread = { ...obj1 }
shallowCopyViaSpread.firstName = 'harsh'
shallowCopyViaSpread.location.lat = '708'
console.log(shallowCopyViaSpread)               // { firstName: 'harsh', location: { lat: '708', long: '432' } }
console.log(obj1)                               // { firstName: 'Amit', location: { lat: '708', long: '432' } }

// clone - assignment opr (well not really a clone, is it?)
let shallowCopyViaAssignment = obj2
shallowCopyViaAssignment.firstName = 'harsh'
shallowCopyViaAssignment.location.lat = '708'
console.log(shallowCopyViaAssignment)           // { firstName: 'harsh', location: { lat: '708', long: '432' } }
console.log(obj2)                               // { firstName: 'harsh', location: { lat: '708', long: '432' } }