import React from 'react'
import styles from './BigList.module.css'

const BigList = ({ item, logger }) => {

    console.log('render child list')

    return (
        <div
            className={styles.item}
            onClick={logger}
        >{item}
        </div>
    )
}

export default React.memo(BigList);