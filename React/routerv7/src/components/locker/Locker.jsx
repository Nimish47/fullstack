import { Link, Outlet } from "react-router-dom"
import styles from './Locker.module.css'
import { useState } from "react"

export const Locker = () => {

    const [lock, setLock] = useState(false)
    const showMatrix = () => setLock(!lock)

    return (
        <div className={styles.matrixContainer}>
            <div className={styles.left}>Locker</div>
            {!lock && <div className={styles.right} onClick={showMatrix}><Link to='/locker/key'>Open key</Link></div>}
            {lock && <div className={styles.outlet}> <Outlet /> </div>}
        </div>
    )
}