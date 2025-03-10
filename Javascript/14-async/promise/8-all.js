// Promises.All
// Structure
    // Promise.All([promise1, promise2, promise3]).then((resolvedValues)=>{...})
    // OR via Array destructuring
    // Promise.All([promise1, promise2, promise3]).then([value1, value2,value3]=>{...}) 
    // waits for each promise to be fulfilled 

// accepts a collection (for example, an array) of promises as an argument and executes them in parallel.
// waits for ALL the promises to RESOLVE and returns the array of promise results.
    // however ,if any of the promises reject or fail due to an error,
    // all other promise results will be ignored.
// The result of all the promises is returned. (if resolved)
// The time to execute all the promises is equal to the max time the promise takes to run. (if all resolved)
// Use it if promises are not be dependent on each other. They should have an independent functionality





const fetchDataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 1')
        }, 2000);

    })
}

const fetchDataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 2')
        }, 2000);

    })
}

const badFetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('False call!')
        }, 2000);

    })
}

    // all promises get resolved
    Promise.all([fetchDataOne(), fetchDataTwo()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });


    // one of the promises get rejected
    Promise.all([fetchDataOne(), fetchDataTwo(), badFetchData()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });    



// [ 'Data 1', 'Data 2']
// One of the promises rejected: False call!