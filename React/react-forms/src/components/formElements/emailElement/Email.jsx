import React from 'react'
import styles from './Email.module.css'

function Email({ name, placeholder, value, changeHandler, required, error }) {
  return (
    <div>
      <input
        type='email'
        placeholder={placeholder || 'Enter email here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Email