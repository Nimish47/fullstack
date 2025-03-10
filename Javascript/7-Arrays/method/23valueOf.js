// METHOD - valueOf

// used to create a copy of array
// copy type: shallow
// a change in properties of copy array leads to change in original array
// arr.valueOf()
// returns copied array
// original array untouched (but a change in properties of copy array leads to change in original array)

const arr = ["apple","grapes"]
const copyArr = arr.valueOf()
console.log(copyArr)            // [ 'apple', 'grapes' ]
copyArr[0] = "oranges"
console.log(copyArr)            // [ 'oranges', 'grapes' ]
console.log(arr)                // [ 'oranges', 'grapes' ]

const arr2= [["apple"],"grapes"]
const copyArr2 = arr2.valueOf()
console.log(copyArr2)            // [ [ 'apple' ], 'grapes' ]
copyArr2[0][0] = "oranges"
console.log(copyArr2)            // [ [ 'oranges' ], 'grapes' ]
console.log(arr2)                // [ [ 'oranges' ], 'grapes' ]
