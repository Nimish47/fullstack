import React, { useEffect, useState } from 'react'
import styles from './SetTimeout.module.css'

function SetTimeout() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        const id = setTimeout(function something() {
            console.log('hola')
            setMessage('Party starts!!!')
        }, 5000);
        console.log(id)

        // clearTimeout(id)
        // placing it here would cancel the something method from executing
    }, [])

    return (
        <div className={styles.container}>
            <div>{message}</div>
        </div>
    )
}

export default SetTimeout