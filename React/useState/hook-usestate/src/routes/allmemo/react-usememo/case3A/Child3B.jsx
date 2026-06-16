import React, { useMemo } from 'react'
import styles from './Child3B.module.css'

function Child3B({ data, scenario}) {

    // a pure function
    const randomFn = (obj,scen) => {
        console.log(`inside random fn scenario ${scen}`) // pure function so omit these things
        return `Child3B => ${obj.city}`
    }

    let memoized_Value = useMemo(() => randomFn(data,scenario), [data])
    // non_memoized_Value = randomFn()

    console.log(`render-child-scenario ${scenario}`)
    return (
        <div className={styles.container}>
            {memoized_Value}
        </div>
    )
}

export default Child3B