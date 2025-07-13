import React from 'react'
import styles from './IntervalContainer.module.css'
import { Link } from 'react-router-dom';

function IntervalContainer() {

    const data = ['goodinterval', 'badinterval'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>Intervals in detail!</div>
            <div className={styles.container}>
                {
                    data.map((item) => (
                        //a very important thing about Link
                        // does not replace URL but appends
                        <Link className={styles.link} to={`${item}`} key={item}>
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default IntervalContainer