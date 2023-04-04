import React from "react";
import AnimatedText from "react-animated-text-content";
import styles from "./Home.module.scss";
import homePic from "../../assets/placeholder-image.png";

export const Home = () => {
  return (
    <div id="about" className={styles.homeContainer}>
      <div className="flex w-8/12 justify-center">
        <h1 className="text-8xl font-bold"> Welcome</h1>

        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className={`animated-paragraph ${styles.textStyleMedium}`}
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          I'm James, a Web Developer
        </AnimatedText>
      </div>
    </div>
  );
};
