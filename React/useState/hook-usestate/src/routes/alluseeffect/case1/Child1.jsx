import React, { useEffect, useRef, useState } from 'react'
import Child2 from './Child2'
import styles from './Child1.module.css'

function Child1({ details, handleDetails }) {

    const id = '#1234'
    const [count, setCount] = useState(0)
    const ref = useRef()

    useEffect(() => {
        console.log('child: mounted')
        //perform async task
        mockFetch()
        return () => {
            console.log('child: cleanup')
            ref.current = null
        }
    }, [])

    useEffect(() => {
        console.log('child: details updated', details)
    }, [details])

    useEffect(()=>{
        console.log('child: madman')

        return () => {console.log('child: madman pre/post cleanup')}
    })

    const mockFetch = () => {
        const id = setTimeout(() => {
            setCount(prev => prev + 1)
        }, 2000);

        ref.current = id
    }

    return (
        <div className={styles.container}>
            <div onClick={handleDetails} className={styles.agechange}>Age changer: {details.age}</div>
            <Child2 id={id} />
        </div>
    )
}

export default Child1