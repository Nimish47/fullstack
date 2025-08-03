import React, { useContext } from 'react'
import BasicChildL2 from './childrensL2/BasicChildL2'
import styles from './BasicChildRight.module.css'
import { BeautyContext } from '../../../context/beautifierContext/BeautifierContextComponent'

function BasicChildRight() {

    const { beautify } = useContext(BeautyContext)

    console.log('render:child:right')
    return (
        <div className={beautify ? styles.beautifierContainer : styles.container}>
            <div className={styles.relContainer}>
                <div>Child (right)</div>
                <BasicChildL2 />
            </div>
        </div>
    )
}

export default BasicChildRight