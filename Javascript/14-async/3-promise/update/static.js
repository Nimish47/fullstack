const URL1 = 'https://jsonplaceholder.typicode.com/todos/1'
const URL2 = 'https://jsonplaceholder.typicode.com/todos/2'
const URL3 = 'https://jsonplaceholder.typicode.com/todos/3'
const URLA = 'lol'
const URLB = 'popeye'
const URLC = 'hakamura'

// Promise.all([fetch(URL1), fetch(URL2), fetch(URL3)])
//     .then(res => Promise.all(res.map(item => item.json())))
//     .then(res => console.log(res))
//     .catch(err => console.log('Some error occured', err.message))

Promise.allSettled([fetch(URL1), fetch(URL2), fetch(URLC)])
    // .then(res => Promise.allSettled(res.map(item => item.status === "fulfilled" ? item.json() : Promise.resolve("rejected"))))
    .then(res => Promise.allSettled(res.map(item => {
        if (item.status === "fulfilled") {
            console.log(item.status)
            return item.json
        }
    })))
    .then(res => console.log(res))
    .catch(err => console.log('Some error occured', err.message))