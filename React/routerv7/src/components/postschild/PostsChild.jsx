import { useEffect, useState } from 'react'
import SuspenseLoader from '../loadscreens/suspenseloader/SuspenseLoader';

function PostsChild() {

    const [count, setCount] = useState('')

    useEffect(() => {
        import(/* webpackChunkName: "axios" */ "axios").then((module)  => {
            
            const axios = module.default
            
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    setCount(response.data.length)
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
    }, [])
    if (!count) return <SuspenseLoader />

    return (
        <>{count} posts</>
    )
}

export default PostsChild