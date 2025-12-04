// METHOD - valueOf
// referential copy occurs

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
