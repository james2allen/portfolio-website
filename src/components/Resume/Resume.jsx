import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <div className="m-auto flex w-auto flex-col items-center pl-32 pt-32">
      <button
        variant="primary"
        target="_blank"
        className=""
        onClick={() => handleDownload(resume_link, "James_Allen_Resume.pdf")}
      >
        &nbsp;Download CV
      </button>
      <Document className="mt-16" file={resume_link}>
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </div>
  );
};
