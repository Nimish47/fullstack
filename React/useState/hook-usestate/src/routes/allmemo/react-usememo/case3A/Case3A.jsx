import React, { useState } from 'react'
import styles from './Case3A.module.css'
import Child3A from './Child3A'

function Case3A() {

  const [counter, setCounter] = useState(0)

  const handleCounter = () => setCounter(prev => prev + 1)

  console.log('render parent')

  return (
    <div className={styles.container}>
      <div className={styles.value}>{counter}</div>
      <div className={styles.button} onClick={handleCounter}>Counter press</div>
      <Child3A />
    </div>
  )
}

export default Case3A