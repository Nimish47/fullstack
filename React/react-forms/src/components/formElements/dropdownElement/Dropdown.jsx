import React from 'react'
import styles from './Dropdown.module.css'

function Dropdown({ title, val, changeHandler, dropdownOptions, placeHolderText }) {
  return (
    <div className={styles.dropdownButtons}>
      <select
        name={title}
        className={styles.inputDropdown}
        onChange={changeHandler}
        value={val}
      >
        <option value=''>{placeHolderText}</option>
        {
          dropdownOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option.toLocaleUpperCase()}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown