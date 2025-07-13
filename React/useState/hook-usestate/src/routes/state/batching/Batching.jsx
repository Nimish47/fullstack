import React, { useState } from 'react'
import styles from './Batching.module.css'

function Batching() {
    const [name, setName] = useState('noname')
    const [age, setAge] = useState(0)

    const handleSyncAsync = () => {
        setName('Sync')

        setTimeout(() => setName('Zero'), 0);
        setTimeout(() => setName('Oner'), 2000)
        setTimeout(() => {
            setName('Twer')
            setAge(36)
        }, 3000)

        setAge(18)
    }

    const handleSyncCounter = () => setAge(age + 1)

    const handleSyncConst = () => {
        setName('Arun')
        setAge(100)
    }

    // consecutive setStates
    const handleSyncConstBad = () => {
        setAge(age + 1)
        setAge(age + 1)
        setAge(age + 1)
    }

    const handleSyncConstGood = () => {
        setAge(prevAge => prevAge + 1)
        setAge(prevAge => prevAge + 1)
        setAge(prevAge => prevAge + 1)
    }


    const handleAsyncCounterBad = () => {
        setTimeout(() => setAge(age + 1), 1000);
        setTimeout(() => setAge(age + 1), 2000);
        setTimeout(() => setAge(age + 1), 3000);
    }

    const handleAsyncCounterGood = () => {
        setTimeout(() => setAge(age => age + 1), 1000);
        setTimeout(() => setAge(age => age + 1), 2000);
        setTimeout(() => setAge(age => age + 1), 3000);
    }

    const handleAsyncConst = () => {
        setTimeout(() => setName('Pushpendu'), 1000);
        setTimeout(() => setName('Pushpendu'), 2000);
        setTimeout(() => setName('Pushpendu'), 3000);
    }


    console.log('render', name, age)

    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.multiAsync}
                    onClick={handleSyncAsync}
                >Async+Sync (once)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleSyncCounter}
                >Sync counter (n times)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleSyncConst}
                >Sync const (n times)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleSyncConstBad}
                >Sync const bad (once)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleSyncConstGood}
                >Sync const good (once)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleAsyncCounterBad}
                >Async counter bad (once)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleAsyncCounterGood}
                >Async counter good (once)</div>
                <div
                    className={styles.clickMe}
                    onClick={handleAsyncConst}
                >Async const (n times)</div>
            </div>
            <div className={styles.label}>{name} - {age}</div>
        </>

    )
}

export default Batching