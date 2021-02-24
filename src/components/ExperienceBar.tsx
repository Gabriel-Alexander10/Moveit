import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar({ darktheme }) {
  return (
    <header
      className={
        `${styles.experienceBar}` +
        ` ${darktheme ? styles.darkthemeExperienceBar : ""}`
      }
    >
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />

        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300 px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
