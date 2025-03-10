// Promise.allSettled
// syntax is similar to Promise.All with below key points below
// waits for each promise to be fulfilled/rejected 
// comparison with Promise.All
    // similarities
        // accepts a collection (for example, an array) of promises as an argument and executes them in parallel.
        // only trick is promises should not be dependent on each other. They should have an independent functionality

    // differences
        // waits for ALL the promises to RESOLVE OR REJECT and returns the array of promise results.
        // The result of all the promises is returned. (whether resolved or rejected)
        // The time to execute all the promises is equal to the max time the promise takes to run. (resolved or rejected)
        // value returned contains a status feild specifying if promise fulfilled or rejected.

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
    Promise.allSettled([fetchDataOne(), fetchDataTwo()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });


    // one of the promises get rejected
    Promise.allSettled([fetchDataOne(), fetchDataTwo(), badFetchData()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });  

    // [
    //     { status: 'fulfilled', value: 'Data 1' },
    //     { status: 'fulfilled', value: 'Data 2' }
    // ]

    // [
    //     { status: 'fulfilled', value: 'Data 1' },
    //     { status: 'fulfilled', value: 'Data 2' },
    //     { status: 'rejected', reason: 'False call!' }
    // ]