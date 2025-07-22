import React, { useCallback, useMemo, useState } from 'react'
import styles from './Case2C.module.css'
import { Child2C } from './Child2C'

function Case2C() {

  const [random, setRandom] = useState(0)
  const [numValue, setNumValue] = useState(0)
  const [selected, setSelected] = useState(false)

  // memoized object
  const childObj = useMemo(() => { return { fullName: 'Purav Koli', age: 39 } }, [])

  // memoized fn
  const handleSelect = useCallback(() => {
    console.log('Inside handleSelect function')
    setSelected(prev => !prev)
  }, [])

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
        <Child2C
          id={numValue}
          details={childObj}
          handleSelect={handleSelect}
          selected={selected}
        />
      </div>
    </div>
  )
}

export default Case2C