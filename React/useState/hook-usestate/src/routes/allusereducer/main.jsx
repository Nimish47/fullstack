import React from 'react'
import styles from './main.module.css'
import { Link } from 'react-router-dom';

function Main() {

    const data = ['useState', 'useReducer'];

    return (
        <div className={styles.parent}>
            <div className={styles.title}>The great useReducer hook!</div>
            <div className={styles.container}>
                {
                    data.map((item) => (
                        <Link className={styles.link} to={`${item}`} key={item}>
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}

export default Main