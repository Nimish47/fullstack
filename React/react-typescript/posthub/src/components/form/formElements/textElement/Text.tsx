import styles from './Text.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type TextProp = {
  name: string,
  placeholder: string,
  value: string,
  changeHandler: (event: FormInputs) => void,
  required: boolean
}


function Text({ name, placeholder, value, changeHandler, required }: TextProp) {
  return (
    <div>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        className={styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Text