// METHOD - some

// "at least" in "one" array iteration, callback condition should return true
// arr.some((data,index)=> {callback condition...})
// if callback condition satisfied at least once, returns true, else false.
// return boolean


const arr = [
    { name: "apple", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "cauliflower", type: "vegetable" },
    { name: "kiwi", type: "fruit" },
    { name: "ladyfinger", type: "vegetable" }
]

const flag = arr.some((item) => item.type === "vegetable")

console.log(flag)       // true