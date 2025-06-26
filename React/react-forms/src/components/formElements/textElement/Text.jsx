import React from 'react'
import styles from './Text.module.css'

function Text({ title, val, changeHandler, placeHolderText, requiredFlag }) {
  return (
    <div>
      <input
        type='text'
        placeholder={placeHolderText || 'Enter text here'}
        name={title}
        className={styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Text