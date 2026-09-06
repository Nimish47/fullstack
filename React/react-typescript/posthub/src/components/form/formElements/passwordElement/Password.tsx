import styles from './Password.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type PasswordProp = {
  name: string,
  placeholder: string,
  value: string,
  changeHandler: (event: FormInputs) => void,
  required: boolean,
  error?: boolean
}

function Password({ name, placeholder, value, changeHandler, required, error }: PasswordProp) {
  return (
    <div>
      <input
        type='password'
        placeholder={placeholder || 'Enter password here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Password