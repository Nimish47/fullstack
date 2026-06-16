import React, { useEffect, useMemo } from 'react'
import styles from './Child2C.module.css'

export const Child2C = React.memo(({ id, details, handleSelect, selected }) => {

    // a random fn
    // good only if we don't wanna alter the memoized value, otherwise use useState
    const memoizedValue = useMemo(() => {
        console.log(`inside random fn child2C`)
        if(!id) return 'NA';
        else return id * id;
    }, [id])

    useEffect(() => {
        console.log(`Side Effect, state value`)
    }, [memoizedValue])

    console.log('render child2C')

    return (
        <div className={styles.container}>
            <div className={styles.value}>{memoizedValue}</div>
            <div className={styles.details}>{selected ? `${details.fullName}, ${details.age}` : `react.memo advanced!`}</div>
            <div className={styles.button} onClick={handleSelect}>Click Me!</div>
        </div>
    )
})