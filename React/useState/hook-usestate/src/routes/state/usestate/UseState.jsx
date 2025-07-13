import React from 'react'
import styles from './UseState.module.css'
import { Link } from 'react-router-dom';

function UseState() {

    const data = ['old-counter', 'lazy-usestate', 'batching','advanced-batching'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The great useState hook!</div>
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

export default UseState