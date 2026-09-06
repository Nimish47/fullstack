import styles from './Number.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type NumberProp = {
  name: string,
  placeholder: string,
  value?: number,
  changeHandler: (event: FormInputs) => void,
  required: boolean,
  error?: boolean
}

function Number({ name, placeholder, value, changeHandler, required, error }: NumberProp) {
  return (
    <div>
      <input
        type='number'
        placeholder={placeholder || 'Enter age here'}
        name={name}
        className={error ? styles.inputError : styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Number