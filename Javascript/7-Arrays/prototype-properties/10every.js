// METHOD - every

// "all" array iterations, callback condition should return true
// arr.every((data,index)=> {callback condition...})
// if callback condition satisfied for all iterations, returns true, else false.
// return boolean


const arr = [
    { name: "apple", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "kiwi", type: "fruit" },
]

const arr2 = [
    { name: "apple", type: "fruit" },
    { name: "jackfruit", type: "vegetables" },
    { name: "kiwi", type: "fruit" },
]

const flag = arr.every((item) => item.type === "fruit")
const flag2 = arr2.every((item) => item.type === "fruit")

console.log(flag)       // true
console.log(flag2)       // false