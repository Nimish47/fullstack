import React, { useEffect, useRef, useState } from 'react'
import styles from './ClearTimeout.module.css'

function ClearTimeout() {
    const [message, setMessage] = useState('Loading...')
    const clearRefs = useRef([])
    const buttonRef = useRef()

    useEffect(() => {
        const id = setTimeout(function partyStart() {
            setMessage('Party starts!!!')
        }, 1000);
        clearRefs.current.push(id)

        return () => {
            clearRefs.current.forEach(timeoutId => clearTimeout(timeoutId))
            clearRefs.current = [];
            buttonRef.current = null
        }
    }, [])

    const endParty = () => {

        // explain why we don't store the id in array
        // what happens if we store it in array 

        if (buttonRef.current) clearTimeout(buttonRef.current)
        const id = setTimeout(function partyEnd() {
            setMessage('GoodBye everyone!!!')
        }, 1000);

        buttonRef.current = id
    }

    return (
        <div className={styles.container}>
            <div>{message}</div>
            <div
                className={styles.button}
                onClick={endParty}
            >Close</div>
        </div>
    )
}

export default ClearTimeout