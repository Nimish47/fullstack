import React, { useContext } from 'react'
import BasicChildL2 from './childrensL2/BasicChildL2'
import styles from './BasicChildLeft.module.css'
import { BeautyContext } from '../../../context/beautifierContext/BeautifierContextComponent'
import HideContextComponent from '../../../context/hideContext/HideContextComponent'

function BasicChildLeft() {

    const { beautify } = useContext(BeautyContext)

    console.log('render:child:left')
    return (
        <div className={beautify ? styles.containerBeautifier : styles.container}>
            <div className={styles.relContainer}>
                <div>Child (left)</div>
                {/* Bad practice */}
                <HideContextComponent>
                    <BasicChildL2 />
                </HideContextComponent>
            </div>
        </div>
    )
}

export default BasicChildLeft