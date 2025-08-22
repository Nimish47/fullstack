import React, { useState } from 'react'
import styles from './AdvancedBatching.module.css'

function AdvancedBatching() {

  const [status, setStatus] = useState('')

  const regularFnOne = async () => {
    setStatus('Cooking started')

    // cause a deliberate 1s delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('Cooking in progress!')

    // cause a deliberate 2s delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStatus('Cooking finished, pizza ready!')

    // wait 1s before firing again
    setTimeout(regularFnOne, 1000)
  }

  const regularFnTwo = async () => {
    setStatus('Cooking started')

    // cause a deliberate 1s delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setStatus('Cooking in progress') // this one gets skipped due to sync batching
    setStatus('Cooking finished')   
    
    // fire fn again after 1s delay
    setTimeout(regularFnTwo, 1000)
  }

  const regularFnThree = () => {
    setStatus('Pick mobile') // this one gets skipped due to sync batching
    setTimeout(() => setStatus('Oh! I slept!'), 1000)
    setStatus('Order Burger')
    setTimeout(() => setStatus('Oh, I slept again!!!'), 2000)
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

export default AdvancedBatching