import React, { useMemo, useState } from 'react'
import styles from './Case3B.module.css'
import Child3B from './Child3B'

function Case3B() {

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
        <Child3B id={numValue}/>
      </div>
    </div>
  )
}

export default Case3B