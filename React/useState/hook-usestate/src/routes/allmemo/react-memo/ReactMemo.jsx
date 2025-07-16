import React from 'react'
import styles from './ReactMemo.module.css'
import { Link } from 'react-router-dom';

function ReactMemo() {

    const data = ['case2A'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>React.Memo</div>
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

export default ReactMemo