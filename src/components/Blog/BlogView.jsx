import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogPostBySlug } from "../../graphql/useGetBlogPostBySlug";

export const BlogView = () => {
  let { slug } = useParams();
  const { data, error, isLoading, isSuccess } = useGetBlogPostBySlug({ slug });

  return (
    <div
      id="about"
      className="mx-auto max-w-screen-lg px-4 py-8 lg:px-12 lg:py-16"
    >
      <div className="mt-20 rounded-xl bg-white p-14">
        <h1 className="mb-6 text-3xl font-bold">{data?.post?.title}</h1>
        <div
          className="space-y-6 text-lg"
          dangerouslySetInnerHTML={{ __html: data?.post?.content?.html }}
        ></div>
      </div>
    </div>
  );
};
