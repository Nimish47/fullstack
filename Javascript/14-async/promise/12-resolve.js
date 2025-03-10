// Promise.resolve

// Modern way to resolve a promise
// It resolves a promise with the value passed to it
// Below promise1 and promise2 are exactly the same

const promise1 = new Promise((resolve, reject) => { resolve('I am a good boy!') })
const promise2 = Promise.resolve('I am a good boy!')

console.log(promise1)
console.log(promise2)

// Promise { 'I am a good boy!' }
// Promise { 'I am a good boy!' }