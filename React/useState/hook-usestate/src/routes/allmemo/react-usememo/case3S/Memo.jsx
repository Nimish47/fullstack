import React, { useEffect, useMemo, useState } from 'react'
import styles from './Memo.module.css'

function Memo({ id }) {

    // heavy work
    const transformProps = (val) => {
        console.log('transforming props....memo')
        for (let index = 0; index < 10000000; index++) { } // imitate heavy work
        return val * val;
    }

    const memoizeValue = useMemo(()=> transformProps(id), [id])

    console.log(`memo child rendered`)
    return (
        <div className={styles.container}>
            {memoizeValue}
        </div>
    )
}

export default Memo