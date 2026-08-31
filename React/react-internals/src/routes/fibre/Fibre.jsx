import { useState, useTransition } from "react";
import styles from "./Fibre.module.css";

function Item({ number }) {
  return <div>{number}</div>;
}

function Fibre() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  const [isPending, startTransition] = useTransition();

  const items = Array.from(
    { length: 50000 },
    (_, index) => index
  );

  const filteredItems = items.filter((item) =>
    String(item).includes(filter)
  );

  const handleChange = (event) => {

    console.log(event.target.value)

    const value = event.target.value;

    // new hooks  
    setText(value);

    startTransition(() => {
      setFilter(value);
    });

    // normally
    // setText(value);
    // setFilter(value);
  };

  console.log("App rendered");

  return (
    <div className={styles.container}>
      <h2>React Fiber Demo</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type quickly..."
        className={styles.input}
      />

      <div className={styles.status}>
        {isPending ? (
          <strong>React is rendering results...</strong>
        ) : (
          <strong>Ready</strong>
        )}
      </div>

      <p>
        Showing {filteredItems.length} results
      </p>

      <div className={styles.results}>
        {filteredItems.map((item) => (
          <Item key={item} number={item} />
        ))}
      </div>
    </div>
  );
}

export default Fibre;