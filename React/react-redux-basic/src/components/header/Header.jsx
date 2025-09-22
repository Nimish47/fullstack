import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to="/">
                <div className={styles.verbiage}>Popeyes Lousiana</div>
            </Link>
            <Link className={styles.analyticsLink} to="/analytics">
                <div className={styles.analyticsTab}>Analytics</div>
            </Link>
        </div>
    )
}

export default Header