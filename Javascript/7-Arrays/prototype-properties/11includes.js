// METHOD - includes

// used to verify if a checkValue is present in array entries
// arr.includes(checkValue)
// only one checkValue to be present (ideally)
// if multiple checkValues present, check will be performed for only first checkValue (see example)
// checkValue should be of primitive data type only
// returns boolean


const arr = ["kabaddi", "cricket", "football"]

console.log(arr.includes("football"))                       // true
console.log(arr.includes("golf"))                           // false
console.log(arr.includes("golf", "cricket"))                // false, does a check for only first value

const arr2 = [
    { name: "apple", type: "fruit" },
    { name: "oranges", type: "fruit" },
    { name: "kiwi", type: "fruit" },
]

console.log(arr2.includes({ name: "oranges", type: "fruit" }))       // false, non-primitive check