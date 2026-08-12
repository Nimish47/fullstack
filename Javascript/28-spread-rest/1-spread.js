// spread operator in javascript


// CASE: concatenate arrays
const arr1 = [1, 2, 3, 4]
const arr2 = ['a', 'b', 'c', 'd']
const resultArr = [...arr1, ...arr2]
console.log(resultArr)                              // [ 1,   2,   3,   4, 'a', 'b', 'c', 'd' ]


// CASE: concatenate objects
const obj1 = { fid: 1, fName: 'Amit' }
const obj2 = { lid: 9, lName: 'Sinha' }
const resultObj = { ...obj1, ...obj2 }
console.log(resultObj)                               // { fid: 1, fName: 'Amit', lid: 9, lName: 'Sinha' }


// CASE: sets to arrays
const ss = new Set()
ss.add(1)
ss.add('apple')
const res = [...ss]            
console.log(res)                                    // [ 1, 'apple' ]


// CASE: update one property while others unchanged
// classic React UseCase
const obj3 = { fid: 1, fName: 'Amit', age: 18, country: 'IN' }
const updatedObj = { ...obj3, fName: 'Harsh' }
console.log(updatedObj)                             // { fid: 1, fName: 'Harsh', age: 18, country: 'IN' }


// CASE: function params during function call
function adder(a, b, c, d) { console.log(a + b + c + d) }
const arr = [10, 20, 30, 40]
adder(...arr)                                        // 100



// warning: shallow clone
// check clone section