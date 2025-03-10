// Print a promise in pending state
// any asynchronous or waiting type of task is performed INSIDE not OUSIDE a promise
// setTimeout journey: CALL STACK -> WEB/NODE API -> EVENT QUEUE -> CALL STACK
// .then() and .catch() applied ONLY to a promise object

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Finally data is here!')
    }, 2000);
})

console.log(fetchData)                                  // Promise { <pending> }
fetchData.then((data) => { console.log(data) })         // Finally data is here!
