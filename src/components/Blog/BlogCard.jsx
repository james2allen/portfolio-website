import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({
  title,
  author,
  coverPhoto,
  blurb,
  altText,
  datePublished,
  slug,
}) => {
  return (
    <div className="w-full">
      <Link to={`/blog/${slug}`}>
        <div className="mb-5 flex max-h-44 w-full flex-col items-center rounded-lg bg-white shadow hover:bg-gray-100 md:flex-row">
          <img
            className="max-h-40 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
            src={coverPhoto.url}
            alt={altText}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blurb}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
