//  primitive datatype : Symbol
//  and its comparison

const id1 = Symbol('id')
const id2 = Symbol('id')

console.log(id1)    // Symbol(id)
console.log(id2)    // Symbol(id)

console.log(id1 == id2)     // false