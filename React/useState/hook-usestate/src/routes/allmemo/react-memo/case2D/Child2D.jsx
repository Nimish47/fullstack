import React, { useEffect, useMemo } from 'react'
import styles from './Child2D.module.css'


// can be anything
const customComparer = (prevProps, nextProps) => {
  console.log('Inside custom comparer')
  if(nextProps.id === 10) return true;
  return false;
};

export const Child2D = React.memo(({ id, details, handleSelect, selected }) => {

    // a random fn
    const memoizedValue = useMemo(() => {
        console.log(`inside random fn child2D`)
        if(!id) return 'NA';
        else return id * id;
    }, [id])

    useEffect(() => {
        console.log(`Side Effect, state value`)
    }, [memoizedValue])

    console.log('render child2D')

    return (
        <div className={styles.container}>
            <div className={styles.value}>{memoizedValue}</div>
            <div className={styles.details}>{selected ? `${details.fullName}, ${details.age}` : `react.memo advanced!`}</div>
            <div className={styles.button} onClick={handleSelect}>Click Me!</div>
        </div>
    )
},customComparer)