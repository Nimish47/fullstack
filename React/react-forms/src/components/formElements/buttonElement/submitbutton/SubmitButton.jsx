import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({ placeholder, error }) {
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