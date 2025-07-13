import React, { useEffect, useState } from 'react'
import styles from './GoodInterval.module.css'

function GoodInterval() {

  const [status, setStatus] = useState('')

  // useEffect(() => { regularFn() }, [])

  const regularFnOne = async () => {
    setStatus('Cooking started')

    // cause a deliberate 1s delay
    await new Promise(resolve => {
      // console.log('hello')
      // setStatus('Cooker!')
      setTimeout(resolve, 1000)
      //resolve()
    })
    setStatus('Cooking in progress!')

    // cause a deliberate 2s delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStatus('Cooking finished, pizza ready!')

    // wait 1s before repeating again
    setTimeout(regularFnOne, 1000)
  }

  const regularFnTwo = async () => {
    setStatus('Cooking started')

    // cause a deliberate 1s delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    setStatus('Cooking in progress')
    setStatus('Cooking finished')

    setTimeout(regularFnTwo, 1000)
  }

  const regularFnThree = () => {
    setStatus('Pick mobile')
    setTimeout(() => { }, 1000)
    setStatus('Order Burger')
    setTimeout(() => { }, 1000)
  }

  console.log('Render', status)

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div
        className={styles.clickMe}
        onClick={regularFnOne}>One</div>
      <div
        className={styles.clickMe}
        onClick={regularFnTwo}>Two</div>
      <div
        className={styles.clickMe}
        onClick={regularFnThree}>Three</div>
    </div>
  )
}

export default GoodInterval