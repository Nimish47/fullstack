import React, { useEffect } from 'react'

function Child2A({ log }) {

    useEffect(() => {
        console.log('Child 2A logger fired')
    }, [log])

    console.log('Child 2A rendered')

    return (
        <div>Child2A</div>
    )
}

export default Child2A