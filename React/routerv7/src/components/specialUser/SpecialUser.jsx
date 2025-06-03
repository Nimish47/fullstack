import styles from './SpecialUser.module.css';

const SpecialUser = () => {

    return (
        <div className={styles.userContainer}>

            <div className={styles.hitman}>
                I am a special user with ID 47. <span>Hitman 47!</span>
            </div>

        </div>
    );
}
export default SpecialUser;