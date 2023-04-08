import React from "react";
import profilePhoto from "../../assets/profile_photo.png";
import axios from "axios";

import fileDownload from "js-file-download";

const handleDownload = (url, filename) => {
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, filename);
    });
};

const resume_link =
  "https://raw.githubusercontent.com/james2allen/portfolio-website/master/src/assets/James_Allen_Resume-website.pdf";

export const Home = () => {
  return (
    <div
      id="about"
      className="mx-auto max-w-screen-lg px-4 py-8 lg:px-12 lg:py-16"
    >
      <div className="mt-40 flex flex-col-reverse rounded-md bg-white p-14 md:flex-row">
        <div className="flex flex-col pr-16 pt-14 md:pt-0">
          <div className="text-3xl font-bold">Hello, it's me</div>
          <span className="pt-6 text-6xl font-bold">
            James <span className="text-orange-600">Allen</span>
          </span>

          <div className="pt-6 text-lg font-medium leading-6">
            With 6 years of experience as a web developer and a specialization
            in React, I have developed a keen eye for creating efficient and
            user-friendly web applications. Based in Toronto, I am constantly
            seeking new challenges and love to experiment with game development
            in my free time.
          </div>

          <button
            variant="primary"
            target="_blank"
            className="mt-12 w-44 rounded-lg bg-orange-600 p-4 text-white hover:bg-orange-800"
            onClick={() =>
              handleDownload(resume_link, "James_Allen_Resume.pdf")
            }
          >
            &nbsp;Download CV
          </button>
        </div>

        <div>
          <img
            className="h-min-[300px] w-min-[300px] h-max-[400px] w-max-[400px] animate-morphing object-cover"
            src={profilePhoto}
          />
        </div>
      </div>
    </div>
  );
};
