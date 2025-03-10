/**
 * Use Arrays along with Map and Set
 * Accessing elements in Map and Set:
 *      - very tedious
 *      - need to use loops to access individual elements
 *      - simple alterantive is to spread(...) them into an array
 */

const { log } = console

const list1 = new Set([1, 2, 3, 4, 5])
const list2 = new Map([['name', 'Amit'], ['age', 22], ['location', 'california']])

const arr1 = [...list1]
const arr2 = [...list2]

log(arr1)      // [ 1, 2, 3, 4, 5 ]
log(arr2)      // [ [ 'name', 'Amit' ], [ 'age', 22 ], [ 'location', 'california' ] ]
