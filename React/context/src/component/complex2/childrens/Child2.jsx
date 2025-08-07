import React from 'react'
import styles from './Child2.module.css'

function Child2() {

    const fn = () => {
        console.log('inside math fn : child2')
        return Math.ceil(Math.random() * 10)
    }

    console.log('child2')

    return (
        <div className={styles.container}>{fn()}</div>
    )
}

export default React.memo(Child2);