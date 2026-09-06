import styles from './Dropdown.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type DropdownProps = {
  dropdownOptions: string[],
  name: string,
  value: string,
  changeHandler: (event: FormInputs) => void,
  placeholder?: string
}

function Dropdown({ name, value, changeHandler, dropdownOptions, placeholder }: DropdownProps) {
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