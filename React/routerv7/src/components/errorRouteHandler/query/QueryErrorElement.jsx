import { Link, useRouteError } from 'react-router-dom'
import styles from './QueryErrorElement.module.css'
import warning from '../../images/warning.png'

export const QueryErrorElement = () => {

    const error = useRouteError()

    return (
        <div className={styles.container}>
            <div>
                <div>ACCESS DENIED <img src={warning} alt="warning" className={styles.warning} /></div>
                <div className={styles.errorMessage}>{error.statusText}. {error.data}</div>
                <div className={styles.linkContainer}>Click to go back to <Link className={styles.link} to='/'>Home</Link></div>
            </div>
        </div>)
}