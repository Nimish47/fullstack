import React, { useState } from 'react'
import styles from './OldCounter.module.css'

function OldCounter() {

    const [counter, setCounter] = useState(0)

    const incrementCount = () => setCounter(counter + 1)
    const decrementCount = () => setCounter(counter - 1)


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.counterValue}>
                    <div className={styles.value}>{counter}</div>
                </div>
                <div className={styles.buttons}>
                    <div
                        className={styles.increment}
                        onClick={incrementCount}
                    >
                        Increment
                    </div>
                    <div
                        className={styles.decrement}
                        onClick={decrementCount}
                    >
                        Decrement
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OldCounter