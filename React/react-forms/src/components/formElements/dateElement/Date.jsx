import React from 'react'
import styles from './Date.module.css'

function Date({ title, val, changeHandler, requiredFlag }) {
  return (
    <div>
      <input
        type='date'
        name={title}
        className={styles.input}
        value={val}
        onChange={changeHandler}
        required={requiredFlag}
      />
    </div>
  )
}

export default Date