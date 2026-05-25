// what we want
// Cooking started -> Cooking in progress -> Cooking finished,pizza is ready! (in loop)

// setIntervals and setTimouts overlap
// order not guaranteed
const irregularFn = () => {
    setInterval(async () => {
    console.log('Cooking started')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay    
    
    console.log('Cooking in progress!')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay
    
    console.log('Cooking finished, pizza ready!')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay
    }, 1000);
}

irregularFn()


// perfect solution to guarantee order
// order is guaranteed
// recursion
const regularFn = async () => {
    console.log('Cooking started')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay    
    
    console.log('Cooking in progress!')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay
    
    console.log('Cooking finished, pizza ready!')
    await new Promise(resolve => setTimeout(resolve, 1000))         // cause a deliberate 1s delay

    regularFn() // recursion
}

// regularFn()


// meaning of below line
// await new Promise(resolve => setTimeout(resolve, 2000))

// a promise is pending
// promise completed once resolve() called
// a setTimout
// after 2s call resolve fn, means call resolve()