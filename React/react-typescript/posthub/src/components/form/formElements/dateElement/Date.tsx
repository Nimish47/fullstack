import styles from './Date.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type dateProp = {
  name: string,
  value: string,
  changeHandler: (event: FormInputs) => void,
  required: boolean
}

function Date({ name, value, changeHandler, required }: dateProp) {
  return (
    <div>
      <input
        type='date'
        name={name}
        className={styles.input}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </div>
  )
}

export default Date