// for in with maps

let mapper = new Map([['fName', 'Nishant'], ['age', 20]])

for (const item of mapper) {
    console.log(item)
}
// [ 'fName', 'Nishant' ]
// [ 'age', 20 ]


for (const item of mapper.values()) {
    console.log(item)
}
// Nishant
// 20

for (const item of mapper.keys()) {
    console.log(item)
}
// fName
// age