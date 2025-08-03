import React, { useState } from 'react'
import BasicChild from './childrens/BasicChild'
import styles from './Case1.module.css'

function Case1() {

    const [theme, setTheme] = useState(false)
    const toggler = () => setTheme(prev => !prev)

    console.log('render:parent')

    return (
        <div className={theme ? styles.containerGrey : styles.container}>
            <div>Issue</div>
            <div className={styles.toggler} onClick={toggler}>Toggle</div>
            <BasicChild theme={theme}/>
        </div>
    )
}

export default Case1