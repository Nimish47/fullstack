// promise chaning when
// then's callback returns nothing - undefined

let promiseObj = new Promise((res, rej) => {
    res('Hello buddy')
})


let callback1 = () => {
    // return nothing
}

let callback2 = (data) => {
    console.log(data)
}

console.log(promiseObj.then(callback1)) // Promise { <pending> }
promiseObj.then(callback1).then(callback2) // undefined
