// import { useState } from 'react'
import { useState } from 'react'
import styles from './About.module.css'
import { BadBubble } from './badBubble/BadBubble'
import { WorstBubble } from './worstBubble/WorstBubble'
import { useLocation, useNavigate } from 'react-router-dom'


export const About = () => {

    // const [goodApplesObj] = useState({})
    const [err, setErr] = useState(false);
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const goodHandler = () => {
        // some gibberish code that throws error
        // not handled by error Element
        // need to handle via: try,catch and navigate to show fallback UI
        try {
            const goodApples = {}
            const data = goodApples.map(item => item);
            console.log(data)
        } catch (error) {
            setErr(true)
            setMessage(error)
        }
    }

    if (err) {
        navigate('/error', {
            state: { errorMessage: message, fromRoute: location.pathname },
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.topText}>Hi Stranger! Which of my side you want to see?</div>
            <div className={styles.bubbles}>
                <div
                    className={styles.goodBubble}
                    onClick={goodHandler}
                >
                    <div className={styles.text}>Good</div>
                </div>
                <div className={styles.badBubble}>
                    <BadBubble />
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.worstBubble}>
                    <WorstBubble />
                </div>
            </div>
        </div>
    )
}