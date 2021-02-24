import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { DarkModeButton } from "../components/DarkModeButton";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import { useState, useCallback } from "react";

export default function Home() {
  const [darktheme, setDarktheme] = useState(false);

  const darkMode = useCallback(() => {
    if (darktheme) {
      setDarktheme(false);
      document.body.className = "";
    } else {
      setDarktheme(true);
      document.body.className = "darktheme";
    }
  }, [setDarktheme, darktheme]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | moveit</title>
      </Head>
      <div>
        <ExperienceBar darktheme={darktheme} />
        <DarkModeButton darkmode={darkMode} />
      </div>

      <section>
        <div>
          <Profile darktheme={darktheme} />
          <CompletedChallenges />
          <CountDown darktheme={darktheme} />
        </div>

        <div>
          <ChallengeBox darktheme={darktheme} />
        </div>
      </section>
    </div>
  );
}
