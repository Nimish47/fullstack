// Promise.resolve

// Modern way to resolve a promise
// It resolves a promise with the value passed to it
// Below promise1 and promise2 are exactly the same

// Promise.resolve returns a promise object that is resolved, then() needed to extract value

const promise1 = new Promise((resolve, reject) => { resolve('I am a good boy!') })
const promise2 = Promise.resolve('I am a good boy!')

console.log(promise1)
console.log(promise2)
// Promise { 'I am a good boy!' }
// Promise { 'I am a good boy!' }


promise1.then(data => console.log(data))
promise2.then(data => console.log(data))
// I am a good boy!
// I am a good boy!


// think
Promise.resolve(promise1).then(data => console.log('last',data))        // last I am a good boy!
