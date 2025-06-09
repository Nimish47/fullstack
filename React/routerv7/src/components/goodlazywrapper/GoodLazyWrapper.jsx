import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './GoodLazyWrapper.module.css'

function GoodLazyWrapper() {
    return (
        <div className={styles.container}>
            <div className={styles.topquote}>You really are a god!</div>
            <div className={styles.outlet}>
                <Outlet />
            </div>
            <div className={styles.bottomquote}>Now I've become god! The destroyer of worlds</div>
        </div>
    )
}

export default GoodLazyWrapper