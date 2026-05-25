// Promise.any()
// structure is similar to Promise.All
// Resolves when ANY of the input promises RESOLVE, regardless of whether other promises REJECT.
// The RETURNED promise takes the value of the FIRST RESOLVED promise.
// EXCEPTION: if only ONE PROMISE and that rejects the returned value is rejected promise value

// catch block executes in only one condition, when only bad promises in array (scenario 3)

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
        reject('failed promise')
    })
}

// all promises get resolved
Promise.any([fetchDataOne(), fetchDataTwo()])
    .then((results) => { console.log(results) })
    .catch((error) => { console.error('catch block:', error); });


// one of the promises get rejected
Promise.any([fetchDataOne(), fetchDataTwo(), badFetchData()])
    .then((results) => { console.log(results) })
    .catch((error) => { console.error('catch block:', error); });

// only one promise (bad)
Promise.any([badFetchData()])
    .then((results) => { console.log(results) })
    .catch((error) => { console.error('catch block:', error); });


// catch block: [AggregateError: All promises were rejected] {
//   [errors]: [ 'failed promise' ]
// }
// Data 2
// Data 2