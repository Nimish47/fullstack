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
            <div><Link to='/' className={styles.company}>WILLY HILLS</Link></div>
            <div className={styles.about}><Link className={styles.link}to='/about'>ABOUT</Link></div>
            <div className={styles.contact}><Link className={styles.link} to='/contact'>CONTACT</Link></div>
            <div className={styles.locker}><Link className={styles.link} to='/locker'>LOCKER</Link></div>
            <div
                className={styles.logout}
                onClick={handleLogout}
            >
                LOGOUT
            </div>
        </div>
    )
}