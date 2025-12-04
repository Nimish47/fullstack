// cloning arrays via assignement operator
// not really a cloning
// copy by reference
// even level 1 elements affected

// define array
let arr = ['apple', { fName: 'arjun' }]


// copy by reference via assignement operator
let copyArr = arr


// modify copy array
copyArr[0] = "oranges"
copyArr[1].fName = "karn"

// original gets modified - any level
console.log(arr) // [ 'oranges', { fName: 'karn' } ]