import React, { useEffect, useState } from 'react'
import styles from './Child2B.module.css'

export const Child2B = React.memo(({ id, details, handleSelect, selected }) => {

    const [value, setValue] = useState('Wait...')

    // a random fn
    const randomFn = (id) => {
        console.log(`inside random fn child2B`)
        return id * id;
    }

    useEffect(() => {
        console.log(`Side Effect, state value: ${value}`)
        setValue(randomFn(id))
    }, [id])

    console.log('render child2B')

    return (
        <div className={styles.container}>
            <div className={styles.value}>{value}</div>
            <div className={styles.details}>{selected ? `${details.fullName}, ${details.age}` : `React.Memo here!`}</div>
            <div className={styles.button} onClick={handleSelect}>Click Me!</div>
        </div>
    )
})