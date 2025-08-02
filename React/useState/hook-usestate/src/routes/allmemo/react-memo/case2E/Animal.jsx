import React from 'react'
import Zookepers from './Zookepers'

function Animal() {

    const zookepers = ['Amir', 'Sanjay', 'Trisha', 'Purab']

    console.log('render child animal')

    return (
        <div>{zookepers.map((person, index) => <Zookepers name={person} key={index} />)}</div>
    )
}

export default Animal