import React, { useEffect, useRef, useState } from 'react'
import styles from './ClearTimeout.module.css'

function ClearTimeout() {
    const [message, setMessage] = useState('Loading...')
    // const clearRefs = useRef([])
    const buttonRef = useRef()

    useEffect(() => {
        const id = setTimeout(function partyStart() {
            setMessage('Party starts!!!')
            //console.log('leak')
        }, 5000);
        // clearRefs.current.push(id)

        return () => {
            clearTimeout(id)
            // clearRefs.current.forEach(timeoutId => clearTimeout(timeoutId))
            // clearRefs.current = [];
            buttonRef.current = null
        }
    }, [])

    const endParty = () => {

        // explain why we don't store the id in array
        // what happens if we store it in array 

        if (buttonRef.current) clearTimeout(buttonRef.current)
        const id = setTimeout(function partyEnd() {
            console.log('event handler fn')
            setMessage('GoodBye everyone!!!')
        }, 1000);

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