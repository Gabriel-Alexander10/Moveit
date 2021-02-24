import styles from "../styles/components/Profile.module.css";

export function Profile({ darktheme }) {
  return (
    <div
      className={
        `${styles.profileContainer}` +
        ` ${darktheme ? styles.darkthemeProfileContainer : ""}`
      }
    >
      <img src="https://github.com/diego3g.png" alt="Profile" />
      <div>
        <strong>Diego Fernandes</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
