// a memoized utility
// works for n number of primitives
// works for n number of array
// works for n number of objects

const memoizeUtility = (fn) => {
    const cache = new Map()
    return function(...params) {
        const key = JSON.stringify(params)                  // stringify key
        if(cache.has(key))  return cache.get(key)           // return from cache
        const result = fn(...params)                        // compute/re-compute
        cache.set(key,result)                               // store in cache
        return result                                       // return after computation 
    }
}

// case 1
// fn takes one param only
// prims and non prims both allowed
// need to memoize it
const heavyOne = (x) => {
    console.log('Fetching result...')
    for (let index = 0; index < 3000000000; index++) { }                // do some heavy task
    return x
}

//memoize
const heavyOneMemoized = memoizeUtility(heavyOne)

//test case
console.log(heavyOneMemoized(23))                           // compute
console.log(heavyOneMemoized("grapes"))                     // compute
console.log(heavyOneMemoized({name: "Arun"}))               // compute
console.log(heavyOneMemoized([10,20,30]))                   // compute

//cache: Map(["23", 23],["grapes","grapes"], "{name: "Arun"}": {name: "Arun"}, "[10,20,30]": [10,20,30])

console.log(heavyOneMemoized(23))                           // cache
console.log(heavyOneMemoized("grapes"))                     // cache
console.log(heavyOneMemoized({name: "Arun"}))               // cache
console.log(heavyOneMemoized([10,20,30]))                   // cache
console.log(heavyOneMemoized("oranges"))                    // compute
// Fetching result...
// 23
// Fetching result...
// grapes
// Fetching result...
// { name: 'Arun' }
// Fetching result...
// [ 10, 20, 30 ]
// 23
// grapes
// { name: 'Arun' }
// [ 10, 20, 30 ]
// Fetching result...
// oranges


// case 2
// fn takes multi params
// prims and non prims both allowed
// need to memoize it
const heavyMulti = (a,b,c) => {
    console.log('Fetching result...')
    for (let index = 0; index < 3000000000; index++) { }                // do some heavy task
    return `${a}, ${b}, ${c}`
}

// memoize
const heavyMultiMemoized = memoizeUtility(heavyMulti)

// console.log(heavyMultiMemoized(10,20,30))
// console.log(heavyMultiMemoized({name: 'Karan', age: 18}))
// console.log(heavyMultiMemoized({age: 18, name: 'Karan'}))
// console.log(heavyMultiMemoized([1,2,3], [4,5,6]))
// console.log(heavyMultiMemoized(10,20,30))
// console.log(heavyMultiMemoized({name: 'Karan', age: 18}))
// console.log(heavyMultiMemoized({age: 18, name: 'Karan'}))
// console.log(heavyMultiMemoized([1,2,3], [4,5,6]))
// console.log(heavyMultiMemoized("apples", "oranges", "papaya"))

// test
// Fetching result...
// 10, 20, 30
// Fetching result...
// [object Object], undefined, undefined
// Fetching result...
// [object Object], undefined, undefined
// Fetching result...
// 1,2,3, 4,5,6, undefined

// 10, 20, 30
// [object Object], undefined, undefined
// [object Object], undefined, undefined
// 1,2,3, 4,5,6, undefined

// Fetching result...
// apples, oranges, papaya