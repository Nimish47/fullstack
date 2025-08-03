import React from 'react'
import BasicChildL2 from './childrensL2/BasicChildL2'
import styles from './BasicChild.module.css'

function BasicChild() {

    console.log('render:children')

    return (
        <div className={styles.container}>
            <div className={styles.relContainer}>
                <div>Child</div>
                <BasicChildL2 />
            </div>
        </div>
    )
}

export default React.memo(BasicChild);