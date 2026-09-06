import styles from './SubmitButton.module.css'

type ErrorTypes = {
    password: boolean,
    email: boolean,
    age: boolean
}

type SubmitType = {
    placeholder: string,
    error: Partial<ErrorTypes>
}

function SubmitButton({ placeholder, error }: SubmitType) {
    return (
        <div>
            <button
                type="submit"
                className={error.password || error.email || error.age ? styles.submitError : styles.submit}
                disabled={error.password || error.email || error.age}
            >
                {placeholder}
            </button>
        </div>
    )
}

export default SubmitButton