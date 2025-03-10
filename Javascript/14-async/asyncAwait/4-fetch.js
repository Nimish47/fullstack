// Explaining async/await with a fetch API call
//  Code INSIDE Async function is SYNCHRONOUS but
//  on the whole Asynchronous function gets pushed to WEB/NODE API and gets handled there like promises.
// On the whole, Async function does not blocks the call stack.  


const GOOD_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const BAD_URL = 'lol'

const fetchData = (url) => {
    return fetch(url)
}

const getData = async (url) => {
    try {
        const strData = await fetchData(url)
        const data = await strData.json()
        console.log('Data fetched', data)
    } catch (error) {
        console.log('Some error occured while fetching data')
    }

}

console.log('Start fetching data')
getData(GOOD_URL)
getData(BAD_URL)
console.log('Other jobs')

// Start fetching data
// Other jobs
// Some error occured while fetching data
// Data fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }