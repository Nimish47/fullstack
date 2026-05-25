// promise vs setTimout
// no conflict here
// promise lose
// because promise resolve slower than timeout and hence no queue conflict


const syncFnA = () => { console.log('Sync fn A') }

const syncFnB = () => { console.log('Sync fn B') }

const asyncFnTimeout = () => {
    setTimeout(() => {
        console.log('Async timeout')
    }, 0);
}

// promise resolves immediately
const asyncFnPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Async promise but slower')
        }, 2000);
    })
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
// Async timeout
// Async promise but slower