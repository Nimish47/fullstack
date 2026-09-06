import styles from './CheckBoxAll.module.css'

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type checkboxAllProp = {
    name: string,
    value: string,
    changeHandler: (e: FormInputs, arr?: string[]) => void,
    formValue: string[],
    allCheckValues: string[]
}

function CheckboxAll({ name, value, changeHandler, formValue, allCheckValues = [] }: checkboxAllProp) {
    return (
        <label className={styles.inputCheckLabel}>
            <input
                type='checkbox'
                name={name}      // for checkboxall to work, name should be same of checkbox we want to select all
                className={styles.inputCheck}
                value={value}
                checked={formValue.length === allCheckValues.length}
                onChange={e => changeHandler(e, allCheckValues)}
            />
            {'SELECT ALL'}
        </label>
    )
}

export default CheckboxAll