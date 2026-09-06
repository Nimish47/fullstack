import styles from './Radio.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type RadioProps = {
  radioOptions: string[],
  name: string,
  value: string,
  changeHandler: (event: FormInputs) => void
}

function Radio({ radioOptions, name, value, changeHandler }: RadioProps) {
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