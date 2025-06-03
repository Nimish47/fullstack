import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import styles from './RootErrorElement.module.css'
import { useEffect, useState } from 'react'

export const RootErrorElement = () => {

    const error = useRouteError()

    const [message, setMessage] = useState("")

    // Handle the error and set the message based on the type of error
    useEffect(() => {
        if (isRouteErrorResponse(error)) {
            setMessage(`${error.statusText}. ${error.data}`)
        } else if (error instanceof Error) {
            setMessage(error.message)
        } else {
            setMessage("An unknown error occurred")
        }
    }, [error])

    return (
        <div className={styles.container}>
            <div>
                {!isRouteErrorResponse(error) && <div>Some error has occured! We are working to resolve the issue.</div>}
                <div className={styles.errorMessage}>{message}</div>
                <div className={styles.linkContainer}>Click to go back to <Link className={styles.link} to='/'>Home</Link></div>
            </div>
        </div>)
}