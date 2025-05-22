import { Link,useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
export const Header = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('auth')
        navigate('/logout', { replace: true })
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.company}><Link to='/' className={styles.company}>WILLY HILLS</Link></div>
            <div className={styles.about}><Link to='/about'>ABOUT</Link></div>
            <div className={styles.contact}><Link to='/contact'>CONTACT</Link></div>
            <div className={styles.locker}><Link to='/locker'>LOCKER</Link></div>
            <div
                className={styles.logout}
                onClick={handleLogout}
            >
                LOGOUT
            </div>
        </div>
    )
}