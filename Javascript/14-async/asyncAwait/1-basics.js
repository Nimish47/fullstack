// basics
// An async function always returns a promise object
// Whatever we return from async fn, becomes resolved value of promise and can be fetched via .then handler
// If some error occurs, can be handled via .catch block
// Alternatively, we can use try catch block too (but that should be done inside async await)

const demo = async () => {
    return 'demo function';
}


const promiseObj = demo()
console.log(promiseObj)
promiseObj.then((value)=> {console.log(value)})

// Promise { 'demo function' }
// demo function