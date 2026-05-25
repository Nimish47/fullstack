// Explaining async/await with a fetch API call
//  Code INSIDE Async function is SYNCHRONOUS but
//  on the whole Asynchronous function gets pushed to WEB/NODE API and gets handled there like promises.
// On the whole, Async function does not blocks the call stack.  


const GOOD_URL = 'https://jsonplaceholder.typicode.com/todos/1'
const BAD_URL = 'lol'

const getData = async (url) => {
    try {
        const strData = await fetch(url)
        const data = await strData.json()
        console.log('Data fetched', data)
    } catch (error) {
        console.log(error.message)
    }

}

console.log('Start fetching data')
getData(GOOD_URL)
getData(BAD_URL)
console.log('Other jobs')

// Start fetching data
// Other jobs
// Failed to parse URL from lol
// Data fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }