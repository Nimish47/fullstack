import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './QueryHandlerv2.module.css'
import refresh from '../images/arrows.png'
import { useEffect, useState } from 'react';


export const QueryHandlerv2 = () => {

    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [params, setParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setName(params.get('name') || '');
        setRollNumber(params.get('rollNumber') || '');
    }, [params])

    const refreshHandler = () => {
        const newRollNumber = Math.floor(Math.random() * 1000);

        // updating query param using the updater fn
        // prev is nothing but same as params - URLSearchParams object
        // this is classic approach to update query string seperated by many '&'
        setParams(prev => {
            prev.set("rollNumber", newRollNumber);
            return prev;
        });

        console.log()

        navigate(`${location.pathname}?${params.toString()}`, { replace: true });

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
                <div className={styles.new}>v2</div>
            </div>
        </div>
    )
}