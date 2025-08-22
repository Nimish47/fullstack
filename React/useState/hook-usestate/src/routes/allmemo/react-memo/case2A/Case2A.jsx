import { useState } from 'react'
import styles from './Case2A.module.css'
import Child2A from './Child2A'

function Case2A() {

  const [random, setRandom] = useState(0)
  const [numValue, setNumValue] = useState(0)
  const [selected, setSelected] = useState(false)

  const childObj = { fullName: 'Akarsh Singh', age: 29 }
  const handleSelect = () => {
    console.log('Inside handleSelect function')
    setSelected(prev => !prev)
  }

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
        <Child2A
          id={numValue}
          details={childObj}
          handleSelect={handleSelect}
          selected={selected}
        />
      </div>
    </div>
  )
}

export default Case2A