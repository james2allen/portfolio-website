import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetBlogPosts } from "../../graphql/useGetBlogPosts";

export const BlogView = () => {
  let { slug } = useParams();
  const { data, error, isLoading, isSuccess } = useGetBlogPosts({ slug });

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, isLoading, error]);

  return (
    <div className="pt-48">
      <div></div>
    </div>
  );
};
