import React from 'react'
import styles from './Child1.module.css'
import { useTraffic } from '../../../context/trafficContext/TrafficContextComponent'

function Child1() {

    const { stopTraffic } = useTraffic()

    console.log('child')

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={stopTraffic}>STOP</div>
        </div>
    )
}

export default Child1