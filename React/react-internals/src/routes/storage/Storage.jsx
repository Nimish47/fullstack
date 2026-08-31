import { useState } from "react";
import styles from "./Storage.module.css";

function Storage() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  const [username, setUsername] = useState(() => {
    return sessionStorage.getItem("username") || "";
  });

  const toggleTheme = () => {
    setDarkMode((current) => {
      const nextMode = !current;

      localStorage.setItem(
        "theme",
        nextMode ? "dark" : "light"
      );

      return nextMode;
    });
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;

    setUsername(value);

    // Save immediately as user types
    sessionStorage.setItem("username", value);
  };

  return (
    <div
      className={`${styles.app} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <div className={styles.card}>
        <h1>Browser Storage Demo</h1>

        <p className={styles.description}>
          localStorage + sessionStorage
        </p>

        {/* Theme */}
        <section className={styles.section}>
          <h2>Theme</h2>

          <button
            className={`${styles.toggle} ${
              darkMode ? styles.toggleDark : ""
            }`}
            onClick={toggleTheme}
          >
            <span className={styles.circle} />
          </button>

          <p>
            Current theme:{" "}
            <strong>{darkMode ? "Dark" : "Light"}</strong>
          </p>
        </section>

        {/* Form */}
        <section className={styles.section}>
          <h2>Session Form</h2>

          <form>
            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Type something..."
            />
          </form>

          <p className={styles.storageInfo}>
            Saved to sessionStorage as you type.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Storage;