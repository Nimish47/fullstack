import styles from './ResetButton.module.css'

type Form = {}

type resetType = {
    placeholder: string,
    formData: Form
}

function ResetButton({ placeholder, formData }: resetType) {
    return (
        <div>
            <button
                type="reset"
                className={Object.keys(formData).length ? styles.clearButton : styles.clearFadeButton}
                disabled={!Object.keys(formData).length}
            >
                {placeholder}
            </button>
        </div>
    )
}

export default ResetButton