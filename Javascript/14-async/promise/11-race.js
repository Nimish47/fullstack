// Promise.race()
// structure is similar to Promise.All
// Resolves or rejects when the FIRST promise in the input array SETTLES, whether it's RESOLVED or REJECTED.
// The returned promise takes the outcome of the FIRST SETTLED promise

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
        }, 1000);
    })
}

// rejects straight away
const badFetchData = () => {
    return new Promise((resolve, reject) => {
            reject('False call!')
    })
}

    // all promises get resolved
    Promise.race([fetchDataOne(), fetchDataTwo()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });


    // one of the promises get rejected
    Promise.race([fetchDataOne(), fetchDataTwo(), badFetchData()])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    });  

    // One of the promises rejected: False call!
    // Data 2