import React from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { useGetBlogPostBySlug } from "../../graphql/useGetBlogPostBySlug";
import { useEffect } from "react";

export const BlogView = () => {
  let { slug } = useParams();
  const { data, error, isLoading, isSuccess } = useGetBlogPostBySlug({ slug });

  useEffect(() => {
    console.log(data?.post?.content);
  }, [data]);

  return (
    <div
      id="about"
      className="mx-auto max-w-screen-lg px-4 py-8 text-black lg:px-12 lg:py-16"
    >
      <div className="mt-20 rounded-xl bg-white p-14">
        <h1 className="mb-6 text-3xl font-bold">{data?.post?.title}</h1>
        <Markdown children={data?.post?.content} />
      </div>
    </div>
  );
};
