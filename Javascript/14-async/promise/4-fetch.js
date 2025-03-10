// Promises explained via fetch API
// a fetch API returns a promise object
// hence can easily be handled via .then and .catch handlers

const GOOD_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const BAD_URL = 'lol'

const fetchData = (url) => {
    return fetch(url)
}

fetchData(GOOD_URL).then((data) => data.json()).then((data) => { console.log(data) })
fetchData(BAD_URL).catch((data) => { console.log('Its a reject') })

// Its a reject
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }