import { useEffect, useState } from 'react';
import styles from './WorstBubble.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const WorstBubble = () => {

    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        // some gibberish code that throws error
        // not handled by errorElement
        // only way to handle async fn errors is: use [try and catch] to handle this
        // navigate to show fallback UI

        // fetchUserNotExist()
    }, []);

    const fetchUserNotExist = async () => {
        try {
            const INVALID_URL = `https://jsonplaceholder.typicode`;
            const response = await fetch(INVALID_URL);
            const res =  await response.json();
            return res
        } catch (error) {
            navigate('/error', {
                state: { error: error.message, fromRoute: location.pathname },
            })
        }
    }

    return (
        <div className={styles.text}
            onClick={fetchUserNotExist}
        >
            Worst
        </div>
    )
}


