import React from 'react'
import styles from './Checkbox.module.css'

function Checkbox({ title, val, changeHandler, checkOptions }) {
  return (
    <div className={styles.checkButtons}>
      <label className={styles.inputCheckLabel}>
        <input
          type='checkbox'
          name={title} // name doesn't groups a set of checkboxes together, but used to identify the checkbox
          className={styles.inputCheck}
          value={'selectAll'}
          checked={val.length === checkOptions.length}
          onChange={changeHandler}
        />
        Select All
      </label>
      {checkOptions.map((option) => (
        <label className={styles.inputCheckLabel}>
          <input
            type='checkbox'
            name={title}                     // name doesn't groups a set of checkboxes together     
            className={styles.inputCheck}
            value={option}
            checked={val.includes(option)} // important, try resetting you'll know why 
            onChange={changeHandler}
          />
          {option.toLocaleUpperCase()}
        </label>
      ))}
    </div>
  )
}

export default Checkbox