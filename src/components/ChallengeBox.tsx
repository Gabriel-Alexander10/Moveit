import { useCallback, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox({ darktheme }) {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountDown();
  }, [completeChallenge, resetCountDown]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountDown();
  }, [resetChallenge, resetCountDown]);

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
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
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
