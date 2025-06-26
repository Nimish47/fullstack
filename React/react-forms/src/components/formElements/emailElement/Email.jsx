import React from 'react'
import styles from './Email.module.css'

function Email({ title, val, changeHandler, placeHolderText, requiredFlag }) {
  return (
    <div>
      <input
        type='email'
        placeholder={placeHolderText || 'Enter email here'}
        name={title}
        className={styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Email