import styles from './Checkbox.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type checkboxProp = {
  name: string,
  value?: string[],
  changeHandler: (event: FormInputs) => void,
  option: string
}

function Checkbox({ name, value, changeHandler, option }: checkboxProp) {
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