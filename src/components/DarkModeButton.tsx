import styles from "../styles/components/DarkModeButton.module.css";

export function DarkModeButton({ darkmode }) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={darkmode} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
