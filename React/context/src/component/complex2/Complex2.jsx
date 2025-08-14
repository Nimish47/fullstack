import React, { useState } from 'react'
import styles from './Complex2.module.css'
import Child1 from './childrens/Child1'
import Child2 from './childrens/Child2'
import Child3 from './childrens/Child3'
import TrafficContextComponent from '../../context/trafficContext/TrafficContextComponent'

function Complex2() {

    const [flag, setFlag] = useState(false)
    const someRandomStuff = () => setFlag(prev => !prev)

    console.log('parent')

    return (
        <div className={flag ? styles.containerWhite : styles.container}>
            <div className={styles.label}>Traffic signal</div>
            <div onClick={someRandomStuff} className={styles.random}>Random Stuff</div>
            <div className={styles.commonflex}>
                <TrafficContextComponent>
                    <Child1 />
                    <Child2 />
                    <Child3 />
                </TrafficContextComponent>
            </div>
        </div>
    )
}

export default Complex2