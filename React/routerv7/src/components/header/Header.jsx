import { Link, NavLink, useNavigate } from 'react-router-dom'
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
            <div>
                <Link to='/' className={styles.company}>
                    WILLY HILLS
                </Link>
            </div>
            <div className={styles.about}>
                <Link
                    className={styles.link}
                    to='/about'>
                    ABOUT
                </Link>
            </div>
            <div className={styles.contact}>
                <NavLink
                    className={({ isActive }) => isActive ? styles.boldLink : styles.link}
                    to='/contact'
                    state={{ message: 'Link has send this message! Back button wont take you back!!! You are trapped haha' }}
                    replace>
                    CONTACT
                </NavLink>
            </div>
            <div className={styles.locker}>
                <Link
                    className={styles.link}
                    to='/locker'>
                    LOCKER
                </Link>
            </div>
            <div
                className={styles.logout}
                onClick={handleLogout}
            >
                LOGOUT
            </div>
        </div>
    )
}