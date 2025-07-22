import React, { useMemo, useState } from 'react'
import styles from './Case3A.module.css'
import Child3A from './Child3A'
import Child3B from './Child3B'

function Case3A() {

  const [random, setRandom] = useState(0)
  const [numValue, setNumValue] = useState(0)

  // const obj = { city: 'Ranchi', state: 'Jharkhand' }
  const memoizeObj = useMemo(() => { return { city: 'Ranchi', state: 'Jharkhand' } }, [])

  const generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 10)
    if (num !== 0 && num % 5 === 0) setNumValue(num)
    setRandom(num)
  }

  console.log('render parent component')
  return (
    <div className={styles.container}>
      <div className={styles.parentItems}>
        <div>
          <div className={styles.value}>{random}</div>
          <div className={styles.button} onClick={generateRandomNumber}>Generate</div>
        </div>
      </div>
      <div className={styles.childContainer}>
        <Child3A id={numValue} scenario={1} />
        <Child3A id={2} scenario={2} />
        <Child3B data={memoizeObj} scenario={3} />
        <Child3B data={{ city: 'Patna', state: 'Bihar' }} scenario={4} />
      </div>
    </div>
  )
}

export default Case3A