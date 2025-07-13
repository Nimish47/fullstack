const irregularFn = () => {
    setInterval(async () => {
        console.log('Cooking started')

        // cause a deliberate 2s delay
        await new Promise(resolve => {
            console.log('Cooking in progress!')
            setTimeout(resolve, 2000)
        })

        console.log('Cooking finished, pizza is ready!')
    }, 1000);
}

// irregularFn()

const regularFn = async () => {
    console.log('Cooking started')
    
    // cause a deliberate 2s delay
    await new Promise(resolve => {
        console.log('Cooking in progress!')
        setTimeout(resolve, 2000)
    })
    
    console.log('Cooking finished, pizza ready!')
    setTimeout(regularFn, 1000)
}

regularFn()


// meaning of below line
// await new Promise(resolve => setTimeout(resolve, 2000))

// a promise is pending
// promise completed once resolve() called
// a setTimout
// after 2s call resolve fn, means call resolve()