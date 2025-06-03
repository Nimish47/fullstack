import styles from './ErrorBoundaryComponent.module.css'


export const ErrorBoundaryComponent = ({ err, errMsg }) => {
    return (
        <div className={styles.container}>
            This is error boundary component.
            You're here coz something went wrong!
        </div>
    )
}