import React, { useCallback, useEffect, useState } from 'react'
import styles from './Child1A.module.css'

function Child1A({ id }) {

    const [value, setValue] = useState('Wait...')

    // a pure function
    const memoized_Fn = useCallback(() => {
        console.log(`inside random fn child1A`) // pure function so omit these things
        return id * id;
    }, [id])

    useEffect(() => {
        console.log(`Side Effect, state value: ${value}`)
        setValue(memoized_Fn())
    }, [memoized_Fn])

    console.log('render child1A')

    return (
        <div className={styles.container}>
            {value}
        </div>
    )
}

export default Child1A