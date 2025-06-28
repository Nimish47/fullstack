import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

function Home() {

    const data = ['inputs', 'formdata', 'individual', 'useform-custom', 'useform-custom-2', 'logs'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>Welcome to modern React Forms</div>
            <div className={styles.container}>
                {
                    data.map((item) => (
                        <Link className={styles.link} to={`/${item}`} key={item}>
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default Home