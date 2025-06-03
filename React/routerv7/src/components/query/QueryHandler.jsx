import { useLocation, useNavigate } from 'react-router-dom';
import styles from './QueryHandler.module.css'
import refresh from '../images/arrows.png'
import { useEffect, useState } from 'react';


export const QueryHandler = () => {

    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setName(queryParams.get('name') || '');
        setRollNumber(queryParams.get('rollNumber') || '');
    }, [location.search])

    const refreshHandler = () => { 
        const newRollNumber = Math.floor(Math.random() * 1000);
        const queryParams = new URLSearchParams(location.search);

        // this will update the query parameters in memory only
        // doing this won't update URL, hence location.search won't 
        // have access to this new value
        queryParams.set('rollNumber', newRollNumber);

        // important! queryParams.toString gives an updated query string
        // important! location.search will give a stale of the query
        navigate(`${location.pathname}?${queryParams.toString()}`, { replace: true });

    }

    return (
        <div className={styles.queryContainer}>
            <div className={styles.queryItems}>
                <div className={styles.queryDetails}>
                    <p><strong>Name:</strong> {name ? name : 'Not provided'}</p>
                    <div className={styles.flex}>
                        <p><strong>Roll Number:</strong> {rollNumber ? rollNumber : 'Not provided'}</p>
                        <div
                            className={styles.refreshContainer}
                            onClick={refreshHandler}
                        >
                            <img src={refresh} alt="refresh" className={styles.refresh} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}