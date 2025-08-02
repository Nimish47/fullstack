import React from 'react'
import Zookepers from './Zookepers'

const Animal = ({ type }) => {

    const zookepers = ['Amir', 'Sanjay', 'Trisha', 'Purab']

    console.log('render child animal')

    return (
        <div>
            <div>{type}</div>
            {zookepers.map((person, index) => <Zookepers name={person} key={index} />)}
        </div>
    )
}

export default React.memo(Animal);