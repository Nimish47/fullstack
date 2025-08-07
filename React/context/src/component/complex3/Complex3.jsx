import React from 'react'
import styles from './Complex3.module.css'
import { Outlet } from 'react-router-dom'
import { useTraffic } from '../../context/trafficContext/TrafficContextComponent'
function Complex3() {

    console.log('parent')

    const { stop } = useTraffic()

    return (
        <div className={stop ? styles.containerRed : styles.container}>
            <Outlet />
        </div>
    )
}

export default Complex3