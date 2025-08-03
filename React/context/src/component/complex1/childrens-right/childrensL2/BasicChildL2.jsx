import React, { useContext } from 'react'
import BasicChildL3 from './childrensL3/BasicChildL3.jsx'
import styles from './BaiscChildL2.module.css'
import { HideContext } from '../../../../context/hideContext/HideContextComponent.jsx'

function BasicChildL2() {

    const { hide, toggleHide } = useContext(HideContext)

    console.log('render:grandchild:right')

    return (
        <div className={styles.container}>
            <div className={styles.relContainer}>
                {!hide && <div className={styles.label}>Grand Child (right)</div>}
                <div className={styles.button} onClick={toggleHide}>HideLR</div>
                <BasicChildL3 />
            </div>
        </div>

    )
}

export default BasicChildL2