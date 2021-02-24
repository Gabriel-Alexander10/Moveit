import { useCallback, useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CountDown.module.css";

let countDownTimeOut: NodeJS.Timeout;

export function CountDown({ darktheme }) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.3 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  // pad start: se a string n tiver 2 caracteres, ele vai colocar no começo o caracter 0;

  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountDown = useCallback(() => {
    clearTimeout(countDownTimeOut); // cancelando a execução de um settimeout
    setIsActive(false);
    setTime(0.3 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div
        className={
          `${styles.countDownContainer}` +
          ` ${darktheme ? styles.darkthemeCountDownContainer : ""}`
        }
      >
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          className={`${styles.countdownButton}
         ${darktheme ? styles.darkthemecountdownButtonActive : ""}`}
          disabled
        >
          ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${
                styles.countdownButtonActive
              } ${darktheme && styles.darkthemecountdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.countdownButton} ${
                darktheme && styles.darkthemecountdownButtonActive
              }`}
              onClick={startCountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
