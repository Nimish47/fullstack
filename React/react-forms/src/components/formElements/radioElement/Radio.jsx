import React from 'react'
import styles from './Radio.module.css'

function Radio({ radioOptions, name, value, changeHandler, error }) {
  return (
    <div className={styles.radioButtons}>
      {radioOptions.map((option, index) => (
        <label className={styles.inputRadioLabel} key={index}>
          <input
            type='radio'
            name={name}              // name groups a set of radio buttons together
            className={styles.inputRadio}
            value={option}
            checked={value === option} // important, try resetting you'll know why 
            onChange={changeHandler}
          />
          {option.toLocaleUpperCase()}
        </label>
      ))}
    </div>
  )
}

export default Radio