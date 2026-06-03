import { useEffect, useState } from 'react'
import axios from 'axios';
import CustomLoader from '../loadscreens/customloader/CustomLoader';

function PostsChild() {

    const [count, setCount] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setCount(response.data.length)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])
    if (!count) return <CustomLoader />

    return (
        <>{count}</>
    )
}

export default PostsChild