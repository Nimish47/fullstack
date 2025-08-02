import React from 'react'
import styles from './Counter.module.css'

function Counter({ count, incrementCounter }) {

    console.log('render child counter')

    return (
        <div>
            <div className={styles.value}>{count}</div>
            <div
                className={styles.button}
                onClick={incrementCounter}
            >
                Incremeter
            </div>
        </div>
    )
}

export default Counter