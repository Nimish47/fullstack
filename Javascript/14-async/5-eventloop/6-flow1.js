// analyze flow 1
// setTimeout - placed in callback queue

const syncFnA = () => { console.log('Sync fn A') }

const syncFnB = () => { console.log('Sync fn B') }

const asyncFn = () => {
    setTimeout(() => {
        console.log('Async fn fired')
    }, 1000);
}

const main = () => {
    syncFnA()
    asyncFn()
    syncFnB()
}

main()
// Sync fn A
// Sync fn B
// Async fn fired