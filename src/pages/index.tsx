import Head from "next/head";
import { GetServerSideProps } from "next";
import { useState, useCallback } from "react";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { DarkModeButton } from "../components/DarkModeButton";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [darktheme, setDarktheme] = useState(false);

  const { level, currentExperience, challengesCompleted } = props;

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
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | moveit</title>
        </Head>
        <div>
          <ExperienceBar darktheme={darktheme} />
          <DarkModeButton darkmode={darkMode} />
        </div>

        <CountdownProvider>
          <section>
            <div>
              <Profile darktheme={darktheme} />
              <CompletedChallenges />
              <Countdown darktheme={darktheme} />
            </div>

            <div>
              <ChallengeBox darktheme={darktheme} />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
