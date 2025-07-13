import React from 'react'
import styles from './HooksContainer.module.css'
import { Link } from 'react-router-dom';

function HooksContainer() {

    const data = ['state', 'timeout', 'interval'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The core hooks</div>
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

export default HooksContainer