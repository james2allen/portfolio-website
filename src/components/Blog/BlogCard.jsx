import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.scss";

export const BlogCard = ({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) => {
  return (
    <div className={styles.card}>
      <Link to={`/blog/${slug}`}>
        <div></div>
      </Link>
    </div>
  );
};
