// promise vs setTimout
// async/await way


const syncFnA = () => { console.log('Sync fn A') }

const syncFnB = () => { console.log('Sync fn B') }

const asyncFnTimeout = () => {
    setTimeout(() => {
        console.log('Async timeout')
    }, 0);
}

// promise resolves immediately
const asyncFnPromise = async () => {
    const data = await Promise.resolve('Async promise')
    console.log(data)
}

const main = () => {
    syncFnA()
    asyncFnTimeout()
    asyncFnPromise()
    syncFnB()
}

main()
// Sync fn A
// Sync fn B
// Async promise
// Async timeout