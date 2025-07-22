import React, { useEffect, useState } from 'react'
import styles from './Child3C.module.css'

function Child3C({ id }) {

    const [value, setValue] = useState('Wait...')

    // a pure function
    const randomFn = (id) => {
        console.log(`inside random fn child3C`) // pure function so omit these things
        return id * id;
    }

    useEffect(() => {
        console.log(`Side Effect, state value: ${value}`)
        setValue(randomFn(id))
    }, [id])


    console.log('render child3C')

    return (
        <div className={styles.container}>
            {value}
        </div>
    )
}

export default Child3C