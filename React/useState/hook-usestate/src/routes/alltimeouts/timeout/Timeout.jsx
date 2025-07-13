import React, { useEffect, useRef, useState } from 'react'
import styles from './Timeout.module.css'

function Timeout() {
    const [message, setMessage] = useState('Loading...')
    const ref = useRef({
        clearRefs: [],
        buttonRef: null
    })

    useEffect(() => {
        const id = setTimeout(function partyStart() {
            setMessage('Party starts!!!')
        }, 2000);
        ref.current.clearRefs.push(id)

        return () => {
            ref.current.clearRefs.forEach(timeoutId => clearTimeout(timeoutId))
            ref.current.clearRefs = [];
            ref.current.buttonRef = null
        }
    }, [])

    const endParty = () => {

        // explain why we don't store the id in array
        // what happens if we store it in array 

        if (ref.current.buttonRef) clearTimeout(ref.current.buttonRef)
        const id = setTimeout(function partyEnd() {
            setMessage('GoodBye everyone!!!')
        }, 2000);

        ref.current.buttonRef = id
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

export default Timeout