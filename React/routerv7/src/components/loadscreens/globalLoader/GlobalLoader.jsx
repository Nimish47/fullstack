import styles from "./GlobalLoader.module.css";

export default function GlobalLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.barsLoader}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}