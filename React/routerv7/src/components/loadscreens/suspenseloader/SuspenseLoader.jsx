import styles from "./SuspenseLoader.module.css";

export default function SuspenseLoader() {
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