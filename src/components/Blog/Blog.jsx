import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Blog.module.scss";
import { BlogCard } from "./BlogCard";

const graphcms = new GraphQLClient(
  "https://ca-central-1.cdn.hygraph.com/content/clg3x6kr61rd901t3ej26d2k2/master",
  {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
  }
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
    }
  }
`;

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const { blogPosts } = await graphcms.request(QUERY);
    setPosts(blogPosts);
  }, []);

  return (
    <div className={styles.blogPage}>
      {posts?.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          datePublished={blog.datePublished}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};
