import React, { useEffect, useState } from 'react'
import styles from './Child2A.module.css'

function Child2A({ id, details, handleSelect, selected }) {

    const [value, setValue] = useState('Wait...')

    // a random fn
    const randomFn = (id) => {
        console.log(`inside random fn child3C`)
        return id * id;
    }

    useEffect(() => {
        console.log(`Side Effect, state value: ${value}`)
        setValue(randomFn(id))
    }, [id])


    console.log('render child2A')

    return (
        <div className={styles.container}>
            <div className={styles.value}>{value}</div>
            <div className={styles.details}>{selected ? `${details.fullName}, ${details.age}` : `Without React.Memo`}</div>
            <div className={styles.button} onClick={handleSelect}>Click Me!</div>
        </div>
    )
}

export default Child2A