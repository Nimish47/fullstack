import React from 'react'
import styles from './CustomLoader.module.css'

function CustomLoader() {
    return (
        <div className={styles.barsLoader}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default CustomLoader