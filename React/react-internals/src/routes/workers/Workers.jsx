import { useEffect, useRef, useState } from "react";
import styles from "./Workers.module.css";

function Workers() {
    const [status, setStatus] = useState("Not started");
    const [result, setResult] = useState(null);
    const [username, setUsername] = useState('')

    const workerRef = useRef(null);

    useEffect(() => {
        const worker = new Worker(
            new URL("./heavyWorker.js", import.meta.url)
        );

        workerRef.current = worker;

        worker.onmessage = (event) => {
            const { status, value } = event.data;

            if (status === "complete") {
                setResult(value);
                setStatus("Success");
            }
        };

        return () => {
            worker.terminate();
        };
    }, []);

    const handleHeavyTask = () => {
        setResult(null);
        setStatus("Calculating...");

        // updates by worker handled in seperate batch
        workerRef.current.postMessage("start");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>React Web Worker Demo</h1>

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

export default Workers;