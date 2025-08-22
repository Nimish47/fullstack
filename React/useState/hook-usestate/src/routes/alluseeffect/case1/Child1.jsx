import React, { useEffect, useRef, useState } from 'react'
import Child2 from './Child2'
import styles from './Child1.module.css'

function Child1({ details, handleDetails }) {

    const [count, setCount] = useState(0)
    const ref = useRef()

    useEffect(() => {
        console.log('child: mounted')
        //perform async task
        mockFetch()
        return () => {
            console.log('child: cleanup')
            clearTimeout(ref.current)
            ref.current = null
        }
    }, [])

    useEffect(() => {
        console.log('child: details updated', details)
    }, [details])

    useEffect(() => {
        console.log('madman:child')
        return () => { console.log('cleanup:child') }
    })

    const mockFetch = () => {
        const timeoutid = setTimeout(() => setCount(prev => prev + 1), 2000);
        ref.current = timeoutid
    }

    console.log('render child')

    return (
        <div className={styles.container}>
            <div onClick={handleDetails} className={styles.agechange}>Age changer: {details.age}</div>
            <Child2 />
        </div>
    )
}

export default Child1