import React from 'react'

function Zookepers({ name }) {

    for (let i = 0; i < 10000; i++) {
        for (let j = 0; j < 10000; j++) { }
    }

    console.log('render grandchild zookeper')
    return (
        <div>{name}</div>
    )
}

export default Zookepers