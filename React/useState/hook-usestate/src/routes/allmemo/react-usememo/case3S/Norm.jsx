import React, { useEffect, useMemo, useState } from 'react'
import styles from './Norm.module.css'

function Norm({ id }) {

    const [value, setValue] = useState(0)

    // heavy work
    const transformProps = (val) => {
        console.log('transforming props....norm')
        for (let index = 0; index < 10000000; index++) { } // imitate heavy work
        return val * val;
    }

    useEffect(() => {
        const data = transformProps(id)
        setValue(data)
    },[id])

    console.log(`norm child rendered`)
    return (
        <div className={styles.container}>
            {value}
        </div>
    )
}

export default Norm