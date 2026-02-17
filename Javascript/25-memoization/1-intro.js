// Intro to memoization


// normal fn 
// takes long time
const heavyTask = (data) => {
    console.log('Fetching result...')
    for (let index = 0; index < 3000000000; index++) { }                // do some heavy task
    return data
}
// console.log(heavyTask(1000))
// console.log(heavyTask(1000))
// console.log(heavyTask(1000))

// memoize fn
const memoizeUtility = (fn) => {
    const cache = {}
    return function(data) {
        if(Object.hasOwn(cache,data))  return cache[data]
        const result = fn(data)
        cache[data] = result
        return result
    }
}

const memoizeHeavytask = memoizeUtility(heavyTask)
console.log(memoizeHeavytask(1000)) // compute
// cache: {1000: 1000}

console.log(memoizeHeavytask(1000)) // from cache
console.log(memoizeHeavytask(1000)) // from cache
// console.log(memoizeHeavytask(5000)) // re-compute
// cache: {1000: 1000, 5000: 5000}
// console.log(memoizeHeavytask(1000)) // from cache



// Fetching result...
// 1000

// 1000
// 1000

// Fetching result...
// 5000

// 1000