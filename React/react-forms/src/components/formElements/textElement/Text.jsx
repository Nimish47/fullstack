import React from 'react'
import styles from './Text.module.css'

function Text({ name, placeholder, value, changeHandler, required, error }) {
  return (
    <div>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        className={styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Text