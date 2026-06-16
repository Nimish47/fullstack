import React, { useMemo } from 'react'
import styles from './Child3A.module.css'

function Child3A({ id, scenario }) {

    // a pure function
    const randomFn = (val,scen) => {
        console.log(`inside random fn scenario ${scen}`) // pure function so omit these things
        return `Child3A => ${val}`
    }

    let memoized_Value = useMemo(() => randomFn(id,scenario), [id])
    // non_memoized_Value = randomFn()

    console.log(`render-child-scenario ${scenario}`)
    return (
        <div className={styles.container}>
            {memoized_Value}
        </div>
    )
}

export default Child3A