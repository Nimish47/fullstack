import React, { useEffect, useRef, useState } from 'react'
import styles from './ClearTimeout.module.css'

function ClearTimeout() {
    const [message, setMessage] = useState('Loading...')
    const buttonRef = useRef()

    useEffect(() => {
        const id = setTimeout(function partyStart() {
            console.log('fcuk')
            setMessage('Party starts!!!')
        }, 5000);

        return () => {
            clearTimeout(id)
            buttonRef.current && clearTimeout(buttonRef.current)
            buttonRef.current = null
        }
    }, [])

    const endParty = () => {

        // explain why we don't store the id in array
        // what happens if we store it in array 

        if (buttonRef.current) clearTimeout(buttonRef.current)
        const id = setTimeout(function partyEnd() {
            console.log('event handler fn')
            const xx = Math.ceil(Math.random() * 10)
            alert('GoodBye everyone!!!' + xx)
        }, 5000);

        buttonRef.current = id
    }

    console.log('comp render')

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