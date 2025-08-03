import React from 'react'
import styles from './BasicChildL3.module.css'

function BasicChildL3({ theme }) {

    console.log('render:great great grandchild')

    return (
        <div className={theme ? styles.containerGrey : styles.container}>Great Grand Child</div>
    )
}

export default BasicChildL3