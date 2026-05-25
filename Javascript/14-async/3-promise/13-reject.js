// Promise.reject
// Modern way to reject a promise
// It rejects a promise with the value passed to it
// Below promise1 and promise2 are exactly the same

// Promise.reject returns a promise object that is rejected, catch() needed to extract error

const promise1 = new Promise((resolve, reject) => { reject('error occured') })
const promise2 = Promise.reject('error occured!')

console.log(promise1)
console.log(promise2)
// Promise { <rejected> 'error occured' }
// Promise { <rejected> 'error occured!' }


promise1.catch(err => console.log(err))
promise2.catch(err => console.log(err))
// error occured
// error occured!