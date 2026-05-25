import { useLocation } from 'react-router-dom';
import styles from './Error.module.css'


export const Error = () => {

        const location = useLocation();

        const from = location.state?.fromRoute || '';
        const error = location.state?.error || 'An unknown error occurred';

        console.error('Error:', error);


    return (
        <div className={styles.errorContainer}>
           <div className={styles.container}>
            <div>Coming from: {from}</div>
            <div>{error}</div>
           </div>
        </div>
    )
}