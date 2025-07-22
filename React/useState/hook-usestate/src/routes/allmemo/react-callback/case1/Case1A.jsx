import React, { useMemo, useState } from 'react'
import styles from './Case1A.module.css'
import Child1A from './Child1A'

function Case1A() {

  const [random, setRandom] = useState(0)
  const [numValue, setNumValue] = useState(0)

  const generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 10)
    if (num !== 0 && num % 5 === 0) setNumValue(num)
    setRandom(num)
  }

  console.log('render parent')
  return (
    <div className={styles.container}>
      <div className={styles.parentItems}>
        <div>
          <div className={styles.value}>{random}</div>
          <div className={styles.button} onClick={generateRandomNumber}>Generate</div>
        </div>
      </div>
      <div className={styles.childContainer}>
        <Child1A id={numValue}/>
      </div>
    </div>
  )
}

export default Case1A