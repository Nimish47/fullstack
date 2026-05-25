// understanding what the empty stack really means
// only after main stack is empty that is all sync code is executed the callbacks will be put
// to main queue by event loop


const syncFnA = () => { console.log('Sync fn A') }
const syncFnB = () => { console.log('Sync fn B') }
const syncFnC = () => { console.log('Sync fn C') }
const syncFnD = () => { console.log('Sync fn D') }
const syncFnE = () => { console.log('Sync fn E') }
const syncFnF = () => { console.log('Sync fn F') }



const asyncFn = () => { setTimeout(() => { console.log('Async fn fired') }, 0); }

const main = () => {
    syncFnA()
    asyncFn()
    syncFnB()
    syncFnC()
    syncFnD()
    syncFnE()
    syncFnF()
}

main()
// Sync fn A
// Sync fn B
// Sync fn C
// Sync fn D
// Sync fn E
// Sync fn F
// Async fn fired