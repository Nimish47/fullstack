import React from 'react'
import styles from './ResetButton.module.css'

function ResetButton({ placeholder, formData }) {
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