import { useState } from "react";
import styles from "./Key.module.css";

function User({ name }) {
  const [text, setText] = useState("");

  return (
    <div className={styles.user}>
      <strong>{name}</strong>

      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={`Message ${name}`}
      />
    </div>
  );
}

function Key() {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Andy" },
    { id: 3, name: "Mike" },
  ]);

  const addUser = () => {
    setUsers((currentUsers) => [
      { id: Date.now(), name: "Sarah" },
      ...currentUsers,
    ]);
  };

  return (
    <div className={styles.container}>
      <h2>React Keys Demo</h2>

      <button onClick={addUser} className={styles.button}>
        Add User at Top
      </button>

      <div className={styles.list}>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Key;