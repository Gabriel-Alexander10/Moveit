import { useCallback, useState, useEffect, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown({ darktheme }) {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  // pad start: se a string n tiver 2 caracteres, ele vai colocar no começo o caracter 0;

  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div
        className={
          `${styles.countdownContainer}` +
          ` ${darktheme ? styles.darkthemeCountdownContainer : ""}`
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
         ${darktheme ? styles.darkthemeCountdownButtonActive : ""}`}
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
              } ${darktheme && styles.darkthemeCountdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.countdownButton} ${
                darktheme && styles.darkthemeCountdownButtonActive
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
