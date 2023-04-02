import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

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
    <div className="m-auto w-auto pl-32 pt-32">
      <Document file={resume_link}>
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </div>
  );
};
