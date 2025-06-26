import React from 'react'
import styles from './Number.module.css'

function Number({ title, val, changeHandler, placeHolderText, requiredFlag }) {
  return (
    <div>
      <input
        type='number'
        placeholder={placeHolderText || 'Enter age here'}
        name={title}
        className={styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Number