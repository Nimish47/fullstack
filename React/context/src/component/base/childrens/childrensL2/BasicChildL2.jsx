import React from 'react'
import BasicChildL3 from './childrensL3/BasicChildL3.jsx'
import styles from './BaiscChildL2.module.css'

function BasicChildL2({theme}) {

    console.log('render:grandchild')

    return (
        <div className={styles.container}>
            <div className={styles.relContainer}>
                <div>Grand Child</div>
                <BasicChildL3 theme={theme}/>
            </div>
        </div>

    )
}

export default BasicChildL2