import React from 'react'
import BasicChildL2 from './childrensL2/BasicChildL2'
import styles from './BasicChild.module.css'

function BasicChild({theme}) {

    console.log('render:child')    
    return (
        <div className={styles.container}>
            <div className={styles.relContainer}>
                <div>Child</div>
                <BasicChildL2 theme={theme}/>
            </div>
        </div>
    )
}

export default BasicChild