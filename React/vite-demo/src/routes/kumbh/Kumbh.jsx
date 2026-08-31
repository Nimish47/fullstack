import styles from './Kumbh.module.css'
import _ from 'lodash';

function Kumbh() {


    return (
        <div className={styles.lazycore}>
            {_.capitalize("hello Year")}
        </div>
    )
}

export default Kumbh