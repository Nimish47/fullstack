import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {

    const data = ['issue', 'basic', 'complex1', 'complex2', 'complex3', 'complex4'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>Context API</div>
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

export default Home