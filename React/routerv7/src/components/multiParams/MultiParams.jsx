import { useParams } from 'react-router-dom';
import styles from './MultiParams.module.css';

const MultiParams = () => {

    const { nationality, age } = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div>Multi params</div>
                <div>I am from <span>{nationality}</span></div>
                <div> I am <span>{age}</span> years old!</div>
            </div>
        </div>
    );
}
export default MultiParams;