import React from 'react'
import styles from './MemoContainer.module.css'
import { Link } from 'react-router-dom';

function MemoContainer() {

    const data = ['usememo', 'usecallback', 'react-memo'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>Memoization in React</div>
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

export default MemoContainer