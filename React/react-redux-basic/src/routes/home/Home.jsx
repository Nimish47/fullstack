import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.verbiage}>Welcome to POPEYES!!!!</div>
            <div className={styles.tabs}>
                <Link className={styles.link} to="/zomato">
                    <div className={styles.zomatoTab}>Zomato</div>
                </Link>
                <Link className={styles.link} to="/swiggy">
                    <div className={styles.swiggyTab}>Swiggy</div>
                </Link>
            </div>
        </div>
    )
}

export default Home