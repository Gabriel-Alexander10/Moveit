import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile({ darktheme }) {
  const { challengesCompleted } = useContext(ChallengesContext);

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
          Level {challengesCompleted}
        </p>
      </div>
    </div>
  );
}
