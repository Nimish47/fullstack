// METHOD - flat

// arr.flat(depth:optional)
// used to flatten an array i.e reduce dimentions of array as specified by depth
// depth represents how many dimensions we want to reduce 
    // 1-Dimension is the lowest we can go upto
    // default value of depth is 1
    // if we have a 3D array and depth = 1, resultant array will be a 2-D array
    // if we have a 3D array and depth = 2, resultant array will be a 1-D array
// original array untouched    


const arr = [1, [2, 3], [[4], 5]]
console.log(arr.flat())         // [ 1, 2, 3, [ 4 ], 5 ]
console.log(arr.flat(1))        // [ 1, 2, 3, [ 4 ], 5 ]
console.log(arr.flat(2))        // [ 1, 2, 3, 4, 5 ]

const arr2 = [[[1],2]]
console.log(arr2.flat())        // [ [ 1 ], 2 ]
console.log(arr2.flat(2))       // [ 1, 2 ]