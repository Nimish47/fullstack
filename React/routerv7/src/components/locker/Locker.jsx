import { Outlet, useNavigate } from "react-router-dom"
import styles from './Locker.module.css'
import bank from '../images/bank.png'
import key from '../images/key.png'
import { useState } from "react"

export const Locker = () => {

    const [lock, setLock] = useState(false)
    const navigate = useNavigate()

    const showMatrix = () => {
        setLock(true)
        navigate('key', { replace: true })      // relative url always works
    }

    return (
        <div className={styles.matrixContainer}>
            <div className={styles.left}>
                <img src={bank} alt="bank" className={styles.lock} />
            </div>
            {
                lock
                    ? <div className={styles.outlet}> <Outlet /> </div>
                    : <div className={styles.right} onClick={showMatrix}>
                        <img src={key} alt="key" className={styles.key} />
                    </div>
            }
        </div>
    )
}