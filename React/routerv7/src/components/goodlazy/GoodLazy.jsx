import { useEffect, useState } from 'react'
import axios from 'axios';
import CustomLoader from '../loadscreens/customloader/CustomLoader';

function GoodLazy() {

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

    if (!count) return <CustomLoader />


    return (
        <>This comp uses axios library and fetches the totalcount which is: {count}</>
    )
}

export default GoodLazy