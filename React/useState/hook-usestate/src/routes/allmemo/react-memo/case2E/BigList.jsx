import React from 'react'
import styles from './BigList.module.css'

function BigList({ item, logger }) {

    console.log('render child list')

    //unnecessary delay
    for (let index = 0; index < 1000; index++) {
        for (let j = 0; j < 1000; j++) {}
    }

    return (
        <div
            className={styles.item}
            onClick={logger}
        >{item}
        </div>
    )
}

export default BigList