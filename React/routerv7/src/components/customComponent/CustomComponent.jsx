import { useLocation } from 'react-router-dom'
import styles from './CustomComponent.module.css'


export const CustomComponent = ({ title }) => {

    const location = useLocation()

    return (
        <div className={styles.customComponentContainer}>
            {title}
            {
                location.state.message &&
                <div>{location.state.message}</div>}
        </div>
    )
}