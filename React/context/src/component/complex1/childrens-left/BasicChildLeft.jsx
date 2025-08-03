import React, { useContext } from 'react'
import BasicChildL2 from './childrensL2/BasicChildL2'
import styles from './BasicChildLeft.module.css'
import { BeautyContext } from '../../../context/beautifierContext/BeautifierContextComponent'

function BasicChildLeft() {

    const { beautify } = useContext(BeautyContext)

    console.log('render:child:left')
    return (
        <div className={beautify ? styles.containerBeautifier : styles.container}>
            <div className={styles.relContainer}>
                <div>Child (left)</div>
                <BasicChildL2 />
            </div>
        </div>
    )
}

export default BasicChildLeft