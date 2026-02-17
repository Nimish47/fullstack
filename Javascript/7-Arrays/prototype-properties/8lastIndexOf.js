// METHOD - lastIndexOf
// everything same as indexOf, only difference is search starts from last index instead of first.

const arr = ["oranges","apple","banana","oranges", "grapes"]

const index1 = arr.lastIndexOf("oranges")
const index2 = arr.indexOf("oranges")

console.log(index1)         // 3    // via lastindexOf
console.log(index2)         // 0    // via indexOf    