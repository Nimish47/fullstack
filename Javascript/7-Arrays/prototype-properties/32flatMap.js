// METHOD - flatMap

// a map method is followed by a flat(1)
// arr.flatMap(callbackFun)
// above is same as: arr.map(callbackFun).flat()
// one disdavantage is - with flatMap, you can go down max by 1 level 
// all other points same as flat


const arr = [1, 2, 3]

// via flat(1) and map seperately
const newArr1 = arr.map((item) => [[item * 2]]).flat()
console.log(newArr1)        // [ [ 2 ], [ 4 ], [ 6 ] ]

// via flat(2) and map seperately - BENEFIT OF USING MAP AND FLAT SEPERATELY
const newArr2 = arr.map((item) => [[item * 2]]).flat(2)
console.log(newArr2)        // [ 2, 4, 6 ]

// via flatMap 
// only flat(1) possible
const newArr3 = arr.flatMap((item) => [[item * 2]])
console.log(newArr3)        // [ [ 2 ], [ 4 ], [ 6 ] ]