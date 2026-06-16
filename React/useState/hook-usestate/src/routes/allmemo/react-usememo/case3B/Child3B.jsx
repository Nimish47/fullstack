import { useEffect, useMemo } from 'react'
import styles from './Child3B.module.css'

// randomFn is declared in each rendered
// not good, either move it outside component or
// have everything inside usememo

function Child3B({ id }) {

    // a pure function
    const memoized_Value = useMemo((id) => {
        console.log(`inside random fn child3B`) // pure function so omit these things
        return id * id;
    }, [id])

    useEffect(() => {
        console.log(`Side Effect, memoized value: ${memoized_Value}`)
        // perform some other action if memoized val changes
    }, [memoized_Value])

    console.log('render child3B')

    return (
        <div className={styles.container}>
            {memoized_Value}
        </div>
    )
}

export default Child3B