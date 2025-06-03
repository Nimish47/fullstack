// import { useState } from 'react';
import { useEffect } from 'react';
import styles from './BadBubble.module.css';

export const BadBubble = () => {

    // const [badApplesObj] = useState({});

    useEffect(() => {
        // some gibberish code that throws error
        // this error can be handled by error Element
        // const badApples = {}
        // const data = badApples.map(item => item);
        // console.log(data)
    }, []);

    return (
        <div className={styles.text}>
            {/** this error can be hanlded by errorElement */}
            {/* {badApplesObj.filter((item) => item)} */}
            <div>Bad</div>
        </div>
    )
}