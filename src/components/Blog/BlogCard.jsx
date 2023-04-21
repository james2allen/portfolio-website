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
    <div className="w-full text-black">
      <Link to={`/blog/${slug}`}>
        <div className="mb-5 flex max-h-44 w-full flex-col items-center rounded-lg bg-white shadow hover:bg-gray-100 md:flex-row">
          <img
            className="max-h-40 w-full rounded-t-lg object-cover md:w-48 md:rounded-none md:rounded-l-lg"
            src={coverPhoto.url}
            alt={altText}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 font-bold tracking-tight">{title}</h1>
            <p className="mb-3 font-normal">{blurb}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
