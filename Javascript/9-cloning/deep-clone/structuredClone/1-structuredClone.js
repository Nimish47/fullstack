/**
 * STRUCTURED CLONE 
 *      - new way to deep clone objects and arrays
 *      - better than (JSON stringify and parse) but not perfect
 *      - All things same as (JSON stringify and parse) plus:
 *          - work on all serialisable objects (including sets and maps)
 */


const arr1 = [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]
let deepCopyArr1 = structuredClone(arr1)

deepCopyArr1[0] = 9
deepCopyArr1[1] = 'oranges'
deepCopyArr1[2].firstName = 'Harsh'
deepCopyArr1[2].location.lat = '900'
deepCopyArr1[3][0] = '121'

console.log(deepCopyArr1) // [9, 'oranges', { firstName: 'Harsh', location: { lat: '900', long: '200' } }, ['121', 21]]
console.log(arr1)         // [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]

const arr2 = [new Set([1, 2, 3])]
let deepCopyArr2 = structuredClone(arr2)
deepCopyArr2[0].add(4)

console.log(deepCopyArr2)       // [ Set(4) { 1, 2, 3, 4 } ]
console.log(arr2)               // [ Set(3) { 1, 2, 3 } ]



