// METHOD - MAP

// used to modify each item of an array, thereby creating a new modified array out of the old one
// callback fn: write certain code to modify each item of array
// returns a new array (orignal array untouched)
// arr.map((item,index)=>{...maplogic})

const arr = [1, 2, 3, 4, 5]
const newArr = arr.map((item) => item * 2)
console.log(newArr)         // [ 2, 4, 6, 8, 10 ]