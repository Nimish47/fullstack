import React from 'react'
import styles from './ReactCallback.module.css'
import { Link } from 'react-router-dom';

function ReactCallback() {

    const data = ['case1A'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The useCallback hook</div>
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

export default ReactCallback