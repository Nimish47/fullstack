import React from 'react'
import styles from './Dropdown.module.css'

function Dropdown({ name, placeholder, value, changeHandler, dropdownOptions, error }) {
  return (
    <div className={styles.dropdownButtons}>
      <select
        name={name}
        className={styles.inputDropdown}
        onChange={changeHandler}
        value={value}
      >
        <option value=''>{placeholder}</option>
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