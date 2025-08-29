import { useEffect, useState } from 'react'
import styles from './Key.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

export const Key = () => {

    const [key, setKey] = useState(Math.floor(Math.random() * 1000000))
    const [expiry, setExpired] = useState(false)
    const [counter, setCounter] = useState(10)
    // const navigate = useNavigate()

    const isValidUser = localStorage.getItem("username") === "hitman47"

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter > 0) {
                    return prevCounter - 1
                } else {
                    setExpired(true)
                    clearInterval(interval)
                    return 0
                }
            })
        }, 1000)
        return () => clearInterval(interval) // Cleanup on component unmount
    }, [])

    const regenerate = () => {
        setKey(Math.floor(Math.random() * 1000000))
        setExpired(false)
        setCounter(10)

        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                if (prevCounter > 0) {
                    return prevCounter - 1
                } else {
                    setExpired(true)
                    clearInterval(interval)
                    return 0
                }
            })
        }, 1000)
    }

    //if (!isValidUser) navigate('/error')   Not a good idea
    if (!isValidUser) return <Navigate to="/error"/>   // best approach

    return (
        <div className={styles.lockContainer}>
            <div className={styles.text}>This is a protected route. Key is:
                <div className={expiry ? styles.passwordExpired : styles.password}>{key}</div>
            </div>
            {
                expiry
                    ? <div onClick={regenerate} className={styles.regenerate}>Regenerate</div>
                    : <div className={styles.clock}>{counter}</div>
            }
        </div>
    )
}