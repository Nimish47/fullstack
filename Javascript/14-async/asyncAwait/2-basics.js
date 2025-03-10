// Async/Await basics
// Another example of performing an asynchronous operation inside Async/Await fn

const waitOne = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Wait 1')
        }, 1000);
    })
}

const main = async () => {
    const res = await waitOne()
    console.log('Inside async await:', res)
    return 'Out of the woods'
}

const promiseObj = main()
console.log('Return of main', promiseObj)
promiseObj.then((value) => { console.log('Inside then handler:', value) })

// Return of main Promise { <pending> }
// Inside async await: Wait 1
// Inside then handler: Out of the woods
