// METHOD - findIndex

// iterates array items and stops immediately if callback function returns true
// if callback function returns true, execution stops and thet array element's index is returned
// used mostly when array values are non-primitives (can be used with primitives as well, though)
// arr.findIndex((item)=> {...find logic})
// returns the matched array element's index
// if no match occurs, -1 returned

const arr = [
    { name: "apple", count: 12 },
    { name: "oranges", count: 10 },
    { name: "grapes", count: 50 },
    { name: "kiwi", count: 1 }
]

const index1 = arr.findIndex((item) => item.name === "bananas")
const index2 = arr.findIndex((item) => item.name === "kiwi")

console.log(index1)             // -1
console.log(index2)            // 3