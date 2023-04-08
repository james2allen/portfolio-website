import React from "react";
import { Link } from "react-router-dom";

export const BlogCard = ({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) => {
  return (
    <div className="">
      <Link to={`/blog/${slug}`}>
        <div></div>
      </Link>
    </div>
  );
};
