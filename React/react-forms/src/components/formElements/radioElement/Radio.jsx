import React from 'react'
import styles from './Radio.module.css'

function Radio({ radioOptions, title, val, changeHandler }) {
  return (
    <div className={styles.radioButtons}>
      {radioOptions.map((option) => (
        <label className={styles.inputRadioLabel}>
          <input
            type='radio'
            name={title}              // name groups a set of radio buttons together
            className={styles.inputRadio}
            value={option}
            checked={val === option} // important, try resetting you'll know why 
            onChange={changeHandler}
          />
          {option.toLocaleUpperCase()}
        </label>
      ))}
    </div>
  )
}

export default Radio