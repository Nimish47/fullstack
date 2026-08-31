import styles from "./Events.module.css";

function Events() {
    const handleCapture = (name, event) => {
        console.log(`CAPTURE → ${name}`);
        console.log(event.target)
    };

    const handleBubble = (name, event) => {
        console.log(`BUBBLE → ${name}`);
        console.log(event.target)
    };

    const handleCityCapture = (name, event) => {
        console.log(`CAPTURE → ${name}`);
        console.log(event.target)
    };

    const handleCityBubble = (name, event) => {

        event.stopPropagation()

        console.log(`BUBBLE → ${name}`);
        console.log(event.target)
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.outer}
                onClickCapture={(e) => handleCapture("Asia", e)}
                onClick={(e) => handleBubble("Asia", e)}
            >
                Asia

                <div
                    className={styles.middle}
                    onClickCapture={(e) => handleCapture("India", e)}
                    onClick={(e) => handleBubble("India", e)}
                >
                    India

                    <div
                        className={styles.inner}
                        onClickCapture={(e) => handleCapture("Jharkhand", e)}
                        onClick={(e) => handleBubble("Jharkhand", e)}
                    >
                        Jharkhand

                        <ul
                            onClickCapture={(e) => handleCityCapture("City", e)}
                            onClick={(e) => handleCityBubble("City", e)}
                        >
                            <li
                            // onClickCapture={(e) => handleCapture("Deoghar",e)}
                            // onClick={(e) => handleBubble("Deoghar",e)}
                            >
                                Deoghar
                            </li>

                            <li
                            // onClickCapture={(e) => handleCapture("Jamshedpur",e)}
                            // onClick={(e) => handleBubble("Jamshedpur",e)}
                            >
                                Jamshedpur
                            </li>

                            <li
                            // onClickCapture={(e) => handleCapture("Ranchi",e)}
                            // onClick={(e) => handleBubble("Ranchi",e)}
                            >
                                Ranchi
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;