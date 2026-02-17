// Higher Order Functions in JS



// CASE1: accepts a function as param (criteria 1)
function queue(cb1) {
    console.log('start')
    cb1()
    console.log('done')
}
queue(function () { console.log('CB1') })
// start
// CB1
// done


// CASE2: returns a function (criteria 2)
function adder(a,b) {
    return () => a+b
}
console.log(adder(10,20)())             // 30


// CASE 3: library HOF (MAP)
// map is HOF because accepts a fn as parameter
const mult = [1,2,3].map((x)=>x*5)
console.log(mult)                       // (3) [5, 10, 15]