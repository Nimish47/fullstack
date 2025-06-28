import React from 'react'
import styles from './Date.module.css'

function Date({ name, value, changeHandler, required, error }) {
  return (
    <div>
      <input
        type='date'
        name={name}
        className={styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Date