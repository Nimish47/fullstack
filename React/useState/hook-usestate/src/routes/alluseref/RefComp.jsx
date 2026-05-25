import React, { useEffect, useRef } from 'react'
import styles from './RefComp.module.css'

function RefComp() {

  const nameRef = useRef()

  useEffect(()=>{
    nameRef.current.focus()
  },[])

  return (
    <div className={styles.container}>
        <input ref= {nameRef} className={styles.btn} type='text' placeholder='Enter Name' />
        <input className={styles.btn}type='text' placeholder='Enter Age' />
    </div>
  )
}

export default RefComp