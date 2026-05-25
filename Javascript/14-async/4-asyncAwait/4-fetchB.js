// enforce synchronous type behavious with async/await 


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

// enforce synchronous-type behaviour
// compare with previous code what the difference is
async function processStart() {
    console.log('start process')
    await getData(GOOD_URL)
    await getData(BAD_URL)
    console.log('end process')
}

processStart()

// start process
// Data fetched { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Failed to parse URL from lol
// end process