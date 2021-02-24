import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox({ darktheme }) {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div
      className={`${styles.challengeBoxContainer} ${
        darktheme && styles.darkthemeChallengeBoxContainer
      }`}
    >
      {activeChallenge ? (
        <div
          className={`${styles.challengeActive} ${
            darktheme && styles.darkthemeChallengeActive
          }`}
        >
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div
          className={`${styles.challengeNotActive} ${
            darktheme && styles.darkthemeChallengeNotActive
          }`}
        >
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
