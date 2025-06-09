import React from 'react'
import styles from './SuspenseLoader.module.css'

function SuspenseLoader() {
    return (
        <div className={styles.barsLoader}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default SuspenseLoader