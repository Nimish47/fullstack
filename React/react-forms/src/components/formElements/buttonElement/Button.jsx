import React from 'react'
import styles from '../buttonElement/Button.module.css'

function Button({ placeholder }) {
    return (
        <div>
            <button
                type="submit"
                className={styles.submit}
            >
                {placeholder}
            </button>
        </div>
    )
}

export default Button