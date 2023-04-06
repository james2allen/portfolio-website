import React from "react";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div id="about" className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <div className={styles.welcomeText}> Welcome</div>

        <div className={styles.textStyleMedium}>
          I'm James, a Web Developer based in Toronto.
        </div>
      </div>
    </div>
  );
};
