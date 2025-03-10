// METHOD - FILTER

// filter out array items based on some condition
// callback fn: write certain condtion to check if array item filtered out or remains
// if callback fn returns true, passed to new array else filtered out
// returns a new array (original array untouched)
// arr.filter((item,index)=>{...filterLogic})

const arr = [-2, -1, 0, 1, 2]
const newArr = arr.filter((item) => item > 0)
console.log(newArr)      // [1,2]