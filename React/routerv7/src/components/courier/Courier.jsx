import { useLoaderData, useLocation } from 'react-router-dom';
import styles from './Courier.module.css'

export default function Courier() {

    const location = useLocation();
    const data = useLoaderData();

    const from = location.state?.from || '';
    const fromRoute = location.state?.fromRoute || '';

    const numofusers = data.length && data.length;

    return (
        <div className={styles.courierComponent}>
            <div className={styles.allText}>
                {
                    from || fromRoute
                        ? <div>{`I came from: ${from} and my route was: ${fromRoute} and there are ${numofusers} users.`}</div>
                        : <div className={styles.courierText}>
                            <div>Hello and welcome to courier component.</div>
                            <div>To receive a package call me from <span className={styles.home}>HOME</span> please!</div>
                            <div>Number of users are: {numofusers}</div>
                        </div>
                }
            </div>
        </div>
    );
}