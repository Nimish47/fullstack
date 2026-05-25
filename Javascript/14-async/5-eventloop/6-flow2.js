// analyze flow 2
// promises - placed in priority queue

const syncFnA = () => { console.log('Sync fn A') }

const syncFnB = () => { console.log('Sync fn B') }

// promise resolves immediately
// sync work not preferrred insdie promises
const asyncFn = () => {
    return new Promise((res, rej) => res('promise fired'))
}

const main = () => {
    syncFnA()
    asyncFn().then((data) => { console.log(data) })
    syncFnB()
}

main()
// Sync fn A
// Sync fn B
// promise fired