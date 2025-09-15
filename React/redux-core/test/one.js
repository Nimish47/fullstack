import axios from 'axios'


const fetchAPI = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return response.data
}

const fn = async () => {
    console.log('start')
    // const data = fetchAPI()
    const data = await fetchAPI()    
    if (data) console.log(data.length)
    console.log('done')
}

fn()
