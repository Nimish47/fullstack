import { useEffect, useState } from 'react'
import axios from 'axios';

function Bali() {

    const [count, setCount] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setCount(response.data.length)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    if(!count) return <h1>Loading...</h1>

    return (
        <h1>This comp uses axios library and fetches the totalcount which is: {count}</h1>
    )
}

export default Bali