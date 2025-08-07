import React from 'react'
import styles from './Child3.module.css'
import { useTraffic } from '../../../context/trafficContext/TrafficContextComponent'

function Child3() {

    const { stop, stopTraffic } = useTraffic()

    console.log('child3')

    return (
        <div
            onClick={stopTraffic}
            className={stop ? styles.containerRed : styles.container}>
        </div>
    )
}

export default React.memo(Child3);