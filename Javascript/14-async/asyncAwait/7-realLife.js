// an async await example used in corporate world
// v.important
// note - main fn needs to be async too
// because getData() returns a resolved promise
// if main fn is not async, we'll get a promise object

const GOOD_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getData = async (url) => {
    try {
        const strData = await fetch(url)
        const data = await strData.json()
        return data
    } catch (error) {
        console.log('Some error occured while fetching data')
    }

}

// because async fn returns a promise, this mainfunction needs to be async as well
// a very common confusion
const mainFunction = async () => {
    console.log('Ready to make an API call')
    const res = await getData(GOOD_URL)
    console.log(res)
}

mainFunction()