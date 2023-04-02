import React from "react";
import AnimatedText from "react-animated-text-content";
import homePic from "../../assets/placeholder-image.png";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div id="about" className="m-auto flex w-full flex-row pl-3 pr-3 pt-36">
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
        <div>
          <img src={homePic} className="rounded-full" />
        </div>
      </div>
      <div className="mt-36">
        <div className="w-full rotate-180 overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-36 w-full"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-amber-500"
            ></path>
          </svg>
        </div>
      </div>
      <div className="-mt-1 block h-screen w-full bg-amber-500"></div>
    </div>
  );
};
