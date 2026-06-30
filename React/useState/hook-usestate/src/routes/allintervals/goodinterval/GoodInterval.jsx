import React, { useEffect, useRef, useState } from 'react'
import styles from './GoodInterval.module.css'

function GoodInterval() {

  const [status, setStatus] = useState('No news yet!')
  const timeout = useRef([])

  useEffect(() => {
    regularFn()

    return () => {
      if (timeout.current.length) {
        timeout.current.forEach(timeoutId => clearTimeout(timeoutId))
        timeout.current = []
      }
    }

  }, [])

  const regularFn = async () => {

    // clear all timeouts in previous call
    if (timeout.current.length) {
      timeout.current.forEach(timeoutId => clearTimeout(timeoutId))
      timeout.current = []
    }

    // proceed towards fn execution
    setStatus('Cooking started')

    // cause a deliberate 1s delay
    await new Promise(resolve => {
      const timeoutid = setTimeout(resolve, 1000)
      timeout.current.push(timeoutid)
    })
    setStatus('Cooking is in progress!')

    // cause a deliberate 1s delay
    await new Promise(resolve => {
      const timeoutid = setTimeout(resolve, 2000)
      timeout.current.push(timeoutid)
    })
    setStatus('Cooking finished, pizza ready!')

    // wait 3s before repeating again
    const timeoutid = setTimeout(regularFn, 3000)
    timeout.current.push(timeoutid)
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
    </div>
  )
}

export default GoodInterval