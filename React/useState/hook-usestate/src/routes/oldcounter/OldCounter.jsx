import React, { useState } from 'react'
import styles from './OldCounter.module.css'

function OldCounter() {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('Arjun')

    const incrementCount = () => {
        // explain what happens and why line 10 updation gets ignored
        setCounter(counter + 2)
        setCounter(counter + 1)
    }

    const decrementCount = () => {
        // explain why this works
        // explain prev object, what is it
        setCounter(prev => prev - 1)
        setCounter(prev => prev - 1)
    }

    const delayedCount = () => {

        setCounter(prev => prev + 10) // Render 1

        setTimeout(() => {
            console.log('Counter:', counter)
            // setCounter(counter + 20)
            setCounter(prev => prev + 20)
            setName('Vikram')
            setCounter(prev => {
                console.log('prev', prev)
                return prev - 30;
            })
        }, 1000);
    }

    console.log('Component rendered!', counter, name)

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
                    <div
                        className={styles.delayed}
                        onClick={delayedCount}
                    >
                        Delayed! really
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OldCounter