import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <NavLink
                className={({isActive}) => isActive ? `${styles.active} ${styles.navlink}` : `${styles.navlink}`}
                to="/contact">
                Contact
            </NavLink>
            <NavLink
                className={({isActive}) => isActive ? `${styles.active} ${styles.navlink}` : `${styles.navlink}`}
                to="/logout">
                Logout
            </NavLink>
        </div>
    );
};

export default Header;