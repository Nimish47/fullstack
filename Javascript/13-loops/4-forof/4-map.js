// for in with maps

let mapper = new Map([['fName', 'Nishant'], ['age', 20]])

// best
for (const [key,value] of mapper) {
    console.log(key,value)
}
// fName Nishant
// age 20


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