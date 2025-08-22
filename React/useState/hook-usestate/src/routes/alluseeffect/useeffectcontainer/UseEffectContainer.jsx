import React from 'react'
import styles from './UseEffectContainer.module.css'
import { Link } from 'react-router-dom';

function UseEffectContainer() {

    const data = ['case1'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The Great useEffect hook!</div>
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

export default UseEffectContainer