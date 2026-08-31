import { useState } from "react";
import styles from "./Freeze.module.css";

function Freeze() {
    const [status, setStatus] = useState("Not started");
    const [result, setResult] = useState(null);
    const [username,setUsername] = useState('')

    const handleHeavyTask = () => {
        setResult(null);    // of no use
        setStatus("Calculating..."); // of no use

        let sum = 0;

        // thread blocked
        for (let i = 0; i < 5000000000; i++) {
            sum = i;
        }

        setResult(sum);
        setStatus("Success");

    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>React Freeze Demo</h1>

                <p>
                    Start the heavy calculation and immediately try the
                    second button.
                </p>

                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.primary}
                        onClick={handleHeavyTask}
                    >
                        Heavy Task
                    </button>

                    <input
                        type="text"
                        name='username'
                        value={username}
                        className={styles.secondary}
                        placeholder="enter user name"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.resultBox}>
                    <span className={styles.label}>Status</span>

                    <strong>{status}</strong>

                    {result !== null && (
                        <span className={styles.value}>
                            Result: {result}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Freeze;