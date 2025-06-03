import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>Privacy Policy</div>
            <div>© 2025 Willy and Co.</div>
            <div>Terms of Service</div>
        </div>
    )
}