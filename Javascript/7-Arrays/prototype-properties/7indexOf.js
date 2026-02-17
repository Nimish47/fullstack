// METHOD - indexOf

// very similar to Array.includes
// used to verify if a checkValue is present in array entries
// used with primitive array values (won't work with non-primitive values)
// arr.indexOf(checkValue)
// no callback function here, need to enter whole value
// returns the matched array entry's index
// if no match occurs, -1 returned


const arr = ["apple","banana","oranges", "grapes"]
const arr2 = [
    { name: "apple", count: 12 },
    { name: "oranges", count: 10 },
    { name: "grapes", count: 50 },
    { name: "kiwi", count: 1 }
]

const index1 = arr.indexOf("oranges")
const index2 = arr.indexOf("strawberry")
const index3 = arr2.indexOf({ name: "grapes", count: 50 })

console.log(index1)         // 2
console.log(index2)         // -1
console.log(index3)         // -1 // wont work non-primitive array values