import React, { useCallback, useEffect, useState } from 'react'
import styles from './Child1A.module.css'

function Child1A({ id }) {

    // a pure function
    const memoized_Fn = useCallback((val) => {
        console.log(`inside random fn child1A`) // pure function so omit these things
        alert(val * val)
    }, [id])



    console.log('render child1A')

    return (
        <div className={styles.container}>
            <div onClick={() => memoized_Fn(id)}>Fire</div>
        </div>
    )
}

export default Child1A