import React, { useContext } from 'react'
import BasicChildL3 from './childrensL3/BasicChildL3.jsx'
import styles from './BaiscChildL2.module.css'
import { HideContext } from '../../../../context/hideContext/HideContextComponent.jsx'

function BasicChildL2() {

    const { hide } = useContext(HideContext)

    console.log('render:grandchild:left')

    return (
        <div className={styles.container}>
            <div className={styles.relContainer}>
                {!hide && <div>Grand Child (left)</div>}
                <BasicChildL3 />
            </div>
        </div>

    )
}

export default BasicChildL2