import React, { useEffect, useState } from 'react'
import styles from './LazyState.module.css'

function LazyState(props) {


    const [counter, setCounter] = useState(0)

    // explensive computation data    
    const [data] = useState(() => {
        console.log('compute expensive data')
        const fruits = props.users.map(user => user.country)
        return [...new Set(fruits)]
    })

    const incrementer = () => setCounter(counter + 1)

    useEffect(() => { console.log('Component mounted!') }, [])

    console.log('Rendering component')

    return (
        <div className={styles.container}>
            <div>
                {data.map(item => (
                    <div key={Math.random()}>
                        <div>{item}</div>
                    </div>
                ))
                }
            </div>
            <div className={styles.counterContainer}>
                <div className={styles.countValue}>{counter}</div>
                <div
                    className={styles.countButton}
                    onClick={incrementer}
                >
                    Increment
                </div>
            </div>
        </div>

    )
}

export default LazyState