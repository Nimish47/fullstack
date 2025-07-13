import React from 'react'
import styles from './TimeoutContainer.module.css'
import { Link } from 'react-router-dom';

function TimeoutContainer() {

    const data = ['settimeout', 'cleartimeout', 'timeout'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>Timeouts in detail!</div>
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

export default TimeoutContainer