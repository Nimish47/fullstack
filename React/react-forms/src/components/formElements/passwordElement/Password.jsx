import React from 'react'
import styles from './Password.module.css'

function Password({ title, val, changeHandler, placeHolderText, requiredFlag }) {
  return (
    <div>
      <input
        type='password'
        placeholder={placeHolderText || 'Enter password here'}
        name={title}
        className={styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Password