/**
 * LIMITS OF DEEP COPY VIA JSON.STRINGIFY AND JSON.PARSE
 *      - if we try to clone function or non JSON type (like sets, maps)
 *         those will be stringified too, and when we parse they won’t be useful. ( Referential Information Lost)
 */

const arr = [new Set([1, 2, 3]), { abc() { console.log('abc') } }]

let deepCopyArr = JSON.parse(JSON.stringify(arr))

console.log(deepCopyArr)        // [ {}, {} ]
console.log(arr)                // [ Set(3) { 1, 2, 3 }, { abc: [Function: abc] } ]