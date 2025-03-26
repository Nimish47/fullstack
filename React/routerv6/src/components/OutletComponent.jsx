import { Outlet } from "react-router-dom";
import Top from "./Top";
import Bottom from "./Bottom";
import styles from './OutletComponent.module.css'

const OutletComponent = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.top}>
                <Top />
            </div>
            <div className={styles.out}>
                <Outlet />
            </div>
            <div className={styles.bottom}>
                <Bottom />
            </div>
        </div>
    );
};

export default OutletComponent;