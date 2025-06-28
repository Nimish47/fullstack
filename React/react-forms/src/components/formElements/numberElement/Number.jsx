import React from 'react'
import styles from './Number.module.css'

function Number({ name, placeholder, value, changeHandler, required, error }) {
  return (
    <div>
      <input
        type='number'
        placeholder={placeholder || 'Enter age here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Number