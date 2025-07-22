import React from 'react'
import styles from './ReactUseMemo.module.css'
import { Link } from 'react-router-dom';

function ReactUseMemo() {

    const data = ['case3A','case3B','case3C'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The useMemo hook</div>
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

export default ReactUseMemo