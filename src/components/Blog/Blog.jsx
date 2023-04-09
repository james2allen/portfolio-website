import React from "react";
import { useEffect } from "react";
import { useGetBlogPosts } from "../../graphql/useGetBlogPosts";
import { BlogCard } from "./BlogCard";

export const Blog = () => {
  const { data, error, isLoading, isSuccess } = useGetBlogPosts();

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, isLoading, error]);

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 lg:px-12 lg:py-16">
      <div className="mt-16">
        {data?.posts?.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            blurb={blog.blurb}
            altText={blog.altText}
            datePublished={blog.datePublished}
            coverPhoto={blog.coverPhoto}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};
