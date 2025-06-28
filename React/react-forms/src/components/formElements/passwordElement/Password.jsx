import React from 'react'
import styles from './Password.module.css'

function Password({ name, placeholder, value, changeHandler, required, error }) {
  return (
    <div>
      <input
        type='password'
        placeholder={placeholder || 'Enter password here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Password