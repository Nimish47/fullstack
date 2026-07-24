import React, { useCallback, useMemo, useState } from 'react'
import styles from './Case2B.module.css'
import { Child2B } from './Child2B'

function Case2B() {

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

  // const childObj = { fullName: 'Akarsh Singh', age: 29 }
  // const handleSelect = () => {
  //   console.log('Inside handleSelect function')
  //   setSelected(prev => !prev)
  // }

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
        <Child2B
          id={numValue}
          details={childObj}
          handleSelect={handleSelect}
          selected={selected}
        />
      </div>
    </div>
  )
}

export default Case2B