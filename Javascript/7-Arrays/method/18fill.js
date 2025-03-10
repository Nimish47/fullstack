// METHOD - fill

// used to replace all array items with a constant value
// startindex and endindex can be used to specifty where to start and end the replace process
// [startindex and endindex)
// modifies original array
// arr.fill(constValue, startIndex:optional,endIndex:optional)

const arr = ["potato", "beans", "cardamom", "pickles"]
const arr2 = ["potato", "beans", "cardamom", "pickles"]

arr.fill("onions")
arr2.fill("onions", 1,3)

console.log(arr)                     // [ 'onions', 'onions', 'onions', 'onions' ]

// [startindex and endindex) -> [1,3)
console.log(arr2)                    // [ 'potato', 'onions', 'onions', 'pickles' ]