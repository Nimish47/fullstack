import React from 'react'

function Zookepers({ name }) {

    console.log('render grandchild zookeper')
    return (
        <div>{name}</div>
    )
}

export default Zookepers