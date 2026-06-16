//

import React, { useEffect, useMemo } from 'react'
import styles from './Child2D.module.css'


// can be anything
const customComparer = (prevProps, nextProps) => {
    console.log('Inside custom comparer')
    // any logic
    // return false;  // false means re-render
    return true;   // true means skip re-render
};

export const Child2D = React.memo(({ id, handleSelect }) => {

    // a random fn
    const memoizedValue = useMemo(() => {
        console.log(`inside random fn child2D`)
        if (!id) return 'NA';
        else return id * id;
    }, [id])

    console.log('render child2D')

    return (
        <div className={styles.container}>
            <div onClick={handleSelect} className={styles.value}>{memoizedValue}</div>
        </div>
    )
},customComparer)