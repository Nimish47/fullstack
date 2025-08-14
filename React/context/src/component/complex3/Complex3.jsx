import React from 'react'
import styles from './Complex3.module.css'
import { Link, Outlet } from 'react-router-dom'
import { useTraffic } from '../../context/trafficContext/TrafficContextComponent'
function Complex3() {

    console.log('parent')

    const { stop } = useTraffic()

    return (
        <div className={stop ? styles.containerRed : styles.container}>
            <Link className={styles.type1button} to={`type1`}>Type 1</Link>
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default Complex3