import React from 'react'
import styles from './App.module.css'
import { Link } from 'react-router-dom';

function App() {

    const data = ['fibre', 'key', 'freeze', 'workers', 'events', 'storage'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>React Internals</div>
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

export default App