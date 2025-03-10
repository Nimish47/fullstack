/**
 * COPY OF AN ARRAY (via Assignment operator)
 * copy_arr = original_array
 * The array can have primitive or non-primitive values or both
 * Modifying the copy_array directly via assignment won't modify the original_array
 */

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [{ id: '123', status: 'pass' }]
const arr3 = [{ id: '123', status: 'pass' }]

let copyArr1 = arr1
let copyArr2 = arr2
let copyArr3 = arr3

copyArr1 = [9, 8, 7, 6, 5]
copyArr2 = [{ id: '786', status: 'fail' }]
copyArr3[0].status = "inprogress"

console.log(copyArr1)    // [ 9, 8, 7, 6, 5 ]
console.log(arr1)        // [ 1, 2, 3, 4, 5 ]

console.log(copyArr2)   // [ { id: '786', status: 'fail' } ]
console.log(arr2)       // [ { id: '123', status: 'pass' } ]

console.log(copyArr3)   // [ { id: '786', status: 'inprogress' } ]
console.log(arr3)       // [ { id: '123', status: 'pass' } ]