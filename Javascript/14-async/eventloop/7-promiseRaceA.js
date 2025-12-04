// promise vs setTimout
// old promise way
// promise wins

const syncFnA = () => { console.log('Sync fn A') }

const syncFnB = () => { console.log('Sync fn B') }

const asyncFnTimeout = () => {
    setTimeout(() => {
        console.log('Async timeout')
    }, 0);
}

// promise resolves immediately
const asyncFnPromise = () => {
    return new Promise((res, rej) => res('Async promise'))
}

const main = () => {
    syncFnA()
    asyncFnTimeout()
    asyncFnPromise().then((data) => { console.log(data) })
    syncFnB()
}

main()
// Sync fn A
// Sync fn B
// Async promise
// Async timeout