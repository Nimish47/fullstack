// sorting strings
// case sensitive + insensitive sorts
// normal + reverse order sorts


// sort string -> normal order
let arr1 = ["zebra", "lion", "tiger", "bear", "snake"]
arr1.sort()
console.log(arr1) // [ 'bear', 'lion', 'snake', 'tiger', 'zebra' ]

// sort string -> reverse order
let arr2 = ["zebra", "lion", "tiger", "bear", "snake"]
arr2.sort().reverse()
console.log(arr2) // [ 'zebra', 'tiger', 'snake', 'lion', 'bear' ]

// normal sort using compare fn - making use of localeCompare
let arr6 = ["zebra", "lion", "tiger", "bear", "snake"]
arr6.sort((a,b)=>a.localeCompare(b))
console.log(arr6)

// reverse sort using compare fn - making use of localeCompare
let arr7 = ["zebra", "lion", "tiger", "bear", "snake"]
arr7.sort((a,b)=>b.localeCompare(a))
console.log(arr7)

// issue with case-sensitivity
let arr3 = ["zebra", "Lion", "Tiger", "bear", "snake"]
arr3.sort()
console.log(arr3) // [ 'Lion', 'Tiger', 'bear', 'snake', 'zebra' ]

// sort string -> normal order + case insensitive
let arr4 = ["zebra", "Lion", "Tiger", "bear", "snake"]
arr4.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(arr4) // [ 'bear', 'Lion', 'snake', 'Tiger', 'zebra' ]


// sort string -> reverse order + case insensitive
let arr5 = ["zebra", "Lion", "Tiger", "bear", "snake"]
arr5.sort((a,b)=> b.toLowerCase().localeCompare(a.toLowerCase()))
console.log(arr5) // [ 'zebra', 'Tiger', 'snake', 'Lion', 'bear' ]


