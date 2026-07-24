import React from 'react'
import styles from './Counter.module.css'

function Counter({ count, incrementCounter }) {

    console.log('render child counter')

        for (let index = 0; index < 10000; index++) {
        for (let j = 0; j < 1000; j++) {}
    }

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