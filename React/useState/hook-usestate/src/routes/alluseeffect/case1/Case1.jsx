import React, { useEffect, useState } from 'react'
import Child1 from './Child1'
import styles from './Case1.module.css'

function Case1() {

    const [details, setDetails] = useState({ age: 23, country: 'India' })

    useEffect(() => {
        console.log('parent: mounted')
    }, [])

    useEffect(()=>{
        console.log('parent: details updated', details)
    },[details])

    // this runs everytime this comp re-renders
    useEffect(()=>{
        console.log('parent: madman')
    })

    const handleDetails = () => {
        const newage = Math.floor(Math.random() * 10)
        setDetails(prev => { return { ...prev, age: newage } })
    }

    return (
        <div className={styles.container}>
            <div className={styles.parent}>Parent</div>
            <Child1
                details={details}
                handleDetails={handleDetails}
            />
        </div>
    )
}

export default Case1