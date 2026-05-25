// Promises explained via fetch API
// a fetch call returns a promise object
// hence can easily be handled via .then and .catch handlers

const GOOD_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const BAD_URL = 'lol'

fetch(GOOD_URL)
.then((data) => data.json()).then((data) => { console.log(data) })
.catch(err => console.log('error in call 1',err.message))


fetch(BAD_URL)
.catch((err) => { console.log('error in call 2: ', err.message) })

// Its a reject
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }