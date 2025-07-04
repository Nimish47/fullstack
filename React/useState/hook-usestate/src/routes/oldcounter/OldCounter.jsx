import React, { useState } from 'react'
import styles from './OldCounter.module.css'

function OldCounter() {

    const [counter, setCounter] = useState(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.counterValue}>
                    <div className={styles.value}>{counter}</div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.increment}>Increment</div>
                    <div className={styles.decrement}>Decrement</div>
                </div>
            </div>
        </div>
    )
}

export default OldCounter