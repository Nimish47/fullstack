import React, { useEffect, useState } from 'react'
import styles from './BadInterval.module.css'

function BadInterval() {

  const [status, setStatus] = useState('')

  useEffect(() => { irregularFn() }, [])

  const irregularFn = () => {
    setInterval(async () => {
      setStatus('Cooking started')

      // cause a deliberate 1s delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus('Cooking in progress')

      // cause a deliberate 2s delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus('Cooking finished, pizza is ready!')
    }, 1000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
    </div>
  )
}

export default BadInterval