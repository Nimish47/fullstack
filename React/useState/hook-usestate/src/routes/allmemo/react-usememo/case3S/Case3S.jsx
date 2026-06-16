import React, { useMemo, useState } from 'react'
import styles from './Case3S.module.css'
import Memo from './Memo'
import Norm from './Norm'

// this case shows diff b/w 
// useMemo v/s 
// useState + useEffect
// notice when the heavy fn executes in both cases

function Case3A() {

  const [random, setRandom] = useState(0)
  const [numValue, setNumValue] = useState(0)

  const generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 10)
    if (num !== 0 && num % 5 === 0) setNumValue(num)
    setRandom(num)
  }

  console.log('render parent component 3S')
  return (
    <div className={styles.container}>
      <div className={styles.parentItems}>
        <div>
          <div className={styles.value}>{random}</div>
          <div className={styles.button} onClick={generateRandomNumber}>Generate</div>
        </div>
      </div>
      <div className={styles.childContainer}>
        <Memo id={numValue} />
        <Norm id={numValue} />
      </div>
    </div>
  )
}

export default Case3A