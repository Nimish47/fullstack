import styles from './Email.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type EmailProp = {
  name: string,
  placeholder: string,
  value: string,
  changeHandler: (event: FormInputs) => void,
  required: boolean,
  error?: boolean
}

function Email({ name, placeholder, value, changeHandler, required, error }: EmailProp) {
  return (
    <div>
      <input
        type='email'
        placeholder={placeholder || 'Enter email here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Email