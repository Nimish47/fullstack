/**
 * SHALLOW CLONE OF AN ARRAY
 *    - using spread operator
 *          - let copy_arr = {...arr}
 *    - using assignment operator
 *          - let copy_arr = arr
 *    remaining all points same as shallow-clone-object (only replace object property's value with
 *    array's index value)  
 *  */

/**
 * SHOW DIAGRAM ON WHAT copy_arr[2] really is? Is it a value or a reference and if reference, to whom
 */

const arr1 = [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]
const arr2 = [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]

// clone - SPREAD opr
let shallowCopyViaSpread = [...arr1]
shallowCopyViaSpread[0] = 9
shallowCopyViaSpread[1] = 'oranges'
shallowCopyViaSpread[2].firstName = 'Harsh'
shallowCopyViaSpread[2].location.lat = '900'
shallowCopyViaSpread[3][0] = '121'

console.log(shallowCopyViaSpread)
// [ 9, 'oranges', { firstName: 'Harsh', location: { lat: '900', long: '200' } },[ '121', 21 ]]
console.log(arr1)
// [ 1, 'apple', { firstName: 'Harsh', location: { lat: '900', long: '200' } }, [ '121', 21 ]]

// clone - ASSIGNMENT
let shallowCopyViaAssignment = arr2
shallowCopyViaAssignment[0] = 9
shallowCopyViaAssignment[1] = 'oranges'
shallowCopyViaAssignment[2].firstName = 'Harsh'
shallowCopyViaAssignment[2].location.lat = '900'
shallowCopyViaAssignment[3][0] = '121'

console.log(shallowCopyViaSpread)
// [9, 'oranges', { firstName: 'Harsh', location: { lat: '900', long: '200' } }, ['121', 21]]
console.log(arr2)
// [9, 'oranges', { firstName: 'Harsh', location: { lat: '900', long: '200' } }, ['121', 21]]