// Production level cache
// an upgradation over previous utlity
// cache has a limit

// refresh cache
// cahce has limit
// map used
// strinfigy used

const LRU = (fn, limit) => {
    const cache = new Map()
    return function (...params) {
        // console.log('Cache:', cache)
        const key = JSON.stringify(params)                                          // stringify key
        if (cache.has(key)) {
            const val = cache.get(key)                                              // keep a copy
            cache.delete(key)                                                       // delete from cache
            cache.set(key,val)                                                      // put at last of cache (basically refresh)
            return val                                                              // return from cache
        }
        const result = fn(...params)                                                // compute/re-compute
        cache.set(key, result)                                                       // store in cache
        if (cache.size > limit) cache.delete(cache.keys().next().value);             // oldest delete
        return result                                                               // return after computation 
    }
}

const heavy = (x) => {
    console.log('Fetching result...')
    for (let index = 0; index < 3000000000; index++) { }                // do some heavy task
    return x
}

const memoizedHeavy = LRU(heavy,5)
console.log(memoizedHeavy(1000))
console.log(memoizedHeavy(2000))
console.log(memoizedHeavy(3000))
console.log(memoizedHeavy(4000))
console.log(memoizedHeavy(5000))
// now cache is full
console.log(memoizedHeavy(2000)) // pull from cache, but cache refreshed now
console.log(memoizedHeavy(6000)) // 1000 removed now
console.log(memoizedHeavy(2000))  // still present, pulled from cache
console.log(memoizedHeavy(1000))  // need to compute as not incache

// Fetching result...
// 1000
// Fetching result...
// 2000
// Fetching result...
// 3000
// Fetching result...
// 4000
// Fetching result...
// 5000
// 2000
// Fetching result...
// 6000
// 2000
// Fetching result...
// 1000