import React from "react";
import AnimatedText from "react-animated-text-content";

export const Home = () => {
  return (
    <div id="about" className="m-auto w-full pl-3 pr-3 pt-52">
      <div className="flex w-8/12 justify-center">
        <div className="flex flex-col text-stone-50">
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
            className="animated-paragraph pt-6 text-4xl font-bold"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            I'm James, a Web Developer
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};
