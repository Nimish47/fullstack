import React from 'react'
import styles from './Counter.module.css'

function Counter() {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <div className={styles.value}>5</div>
                <div className={styles.buttons}>
                    <div className={styles.increment}>Increment</div>
                    <div className={styles.decrement}>Decrement</div>
                    <div className={styles.custom}>Custom</div>
                </div>
            </div>
        </div>
    )
}

export default Counter