import styles from './CustomComponent.module.css'


export const CustomComponent = ({title}) => {
    return (
        <div className={styles.customComponentContainer}>
            {title}
        </div>
    )
}