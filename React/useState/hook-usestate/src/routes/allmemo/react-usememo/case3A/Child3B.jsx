import React, { useMemo } from 'react'
import styles from './Child3B.module.css'

function Child3B({ data, scenario}) {

    let memoized_Value ='All alone here'

    // a pure function
    const randomFn = (data) => {
        console.log(`inside random fn scenario ${scenario}`) // pure function so omit these things
        return `Child3B => ${data.city}`
    }

    memoized_Value = useMemo(() => randomFn(data), [data])
    // non_memoized_Value = randomFn()

    console.log(`render-child-scenario ${scenario}`)
    return (
        <div className={styles.container}>
            {memoized_Value}
        </div>
    )
}

export default Child3B