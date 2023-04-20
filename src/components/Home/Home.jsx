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
    <div id="about">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`,
        }}
      >
        <div className="hero-overlay pt-36">
          <div className="hero-content text-center">
            <div className="max-w-md text-white">
              <div className="text-3xl font-bold ">Welcome, I am</div>
              <span className="pt-6 text-6xl font-bold">
                James <span className="text-orange-600">Allen</span>
              </span>

              <div className="pt-6 text-lg font-medium leading-6">
                With 6 years of experience as a web developer and a
                specialization in React, I have developed a keen eye for
                creating efficient and user-friendly web applications. Based in
                Toronto, I am constantly seeking new challenges and love to
                experiment with game development in my free time.
              </div>

              <button
                variant="primary"
                target="_blank"
                className="mt-12 w-44 rounded-xl bg-orange-600 p-4 hover:bg-orange-800"
                onClick={() =>
                  handleDownload(resume_link, "James_Allen_Resume.pdf")
                }
              >
                &nbsp;Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen"></div>
    </div>
  );
};
