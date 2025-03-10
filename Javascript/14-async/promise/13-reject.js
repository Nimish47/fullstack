// Promise.reject
// Modern way to reject a promise
// It rejects a promise with the value passed to it
// Below promise1 and promise2 are exactly the same

const promise1 = new Promise((resolve, reject) => { reject('I am a bad boy!') })
const promise2 = Promise.reject('I am a bad boy!')

console.log(promise1)
console.log(promise2)

// Promise { <rejected> 'I am a bad boy!' }
// Promise { <rejected> 'I am a bad boy!' }