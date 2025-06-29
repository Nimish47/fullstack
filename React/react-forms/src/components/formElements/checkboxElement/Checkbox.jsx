import React from 'react'
import styles from './Checkbox.module.css'

function Checkbox({ name, value, changeHandler, option }) {
  return (
    <label className={styles.inputCheckLabel}>
      <input
        type='checkbox'
        name={name}                     // name doesn't groups a set of checkboxes together     
        className={styles.inputCheck}
        value={option}
        checked={value && value.includes(option)} // important, try resetting you'll know why 
        onChange={changeHandler}
      />
      {option.toLocaleUpperCase()}
    </label>
  )
}

export default Checkbox