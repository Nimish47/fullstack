import { Outlet } from "react-router-dom";
import styles from "./Alone.module.css"

const Alone = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.top}>alone top</div>
            <div className={styles.out}>
                <Outlet />
            </div>
            <div className={styles.bottom}>alone bottom</div>
        </div>

    );
};

export default Alone;