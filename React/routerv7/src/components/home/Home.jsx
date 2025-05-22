
import styles from './Home.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const sendCourier = () => {
        navigate('/courier', {
            state: { from: 'home', fromRoute: location.pathname },
            replace: true
        });
    }

    return (
        <div className={styles.homeContainer}>
            <div className={styles.label}>Where do you want to go!</div>
            <div className={styles.flexContainer}>
                <div className={styles.pessi}>Dynamic</div>
                <div onClick={sendCourier} className={styles.courier}>Courier</div>
            </div>
        </div>
    )
}