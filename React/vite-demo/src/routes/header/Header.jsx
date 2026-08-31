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
                    to='/bali'>
                    bali
                </Link>
            </div>
            <div className={styles.contact}>
                <NavLink
                    className={({ isActive }) => isActive ? styles.boldLink : styles.link}
                    to='/kumbh'
                    >
                    kumbh
                </NavLink>
            </div>
        </div>
    )
}