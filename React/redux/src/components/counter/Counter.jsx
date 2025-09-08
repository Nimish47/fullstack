import React from 'react'
import styles from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { custom, decrement, increment } from './counterSlice'

function Counter() {

    // this mainly deals with store data i.e store.js  
    const count = useSelector(state => state.counter.val)
    
    // this deals directly with individual slices
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <div className={styles.counter}>
                <div className={styles.value}>{count}</div>
                <div className={styles.buttons}>
                    <div className={styles.increment} onClick={() => dispatch(increment())}>Increment</div>
                    <div className={styles.decrement} onClick={() => dispatch(decrement())} >Decrement</div>
                    <div className={styles.custom} onClick={() => dispatch(custom(-5))}>Custom</div>
                </div>
            </div>
        </div>
    )
}

export default Counter