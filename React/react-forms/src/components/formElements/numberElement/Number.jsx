import React from 'react'
import styles from './Number.module.css'

function Number({ title, val, changeHandler, placeHolderText, requiredFlag, error }) {
  return (
    <div>
      <input
        type='number'
        placeholder={placeHolderText || 'Enter age here'}
        name={title}
        className={error ? styles.inputError : styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Number