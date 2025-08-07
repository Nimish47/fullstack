import React from 'react'
import styles from './Child1.module.css'
import { useTraffic } from '../../../context/trafficContext/TrafficContextComponent'

function Child1() {

    const { stop, stopTraffic } = useTraffic()

    console.log('child1')

    return (
        <div
            onClick={stopTraffic}
            className={stop ? styles.containerRed : styles.container}>
        </div>
    )
}

export default React.memo(Child1);