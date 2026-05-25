
import { Link, useLoaderData } from 'react-router-dom';
import styles from './Users.module.css'

export default function Users() {

    const data = useLoaderData()

    return (
        <div className={styles.dynamicComponent}>
            <div className={styles.cardContainer}>
                {data.map((user) => (
                    <Link className={user.id !== 47 ? styles.link : styles.hitmanLink} to={`${user.id}`}>
                        <div key={user.id}>{user.name}</div>
                    </Link>
                ))}
                <Link className={styles.paramLink} to="/India/user/29">Multi Params</Link>
            </div>
        </div>
    );
}