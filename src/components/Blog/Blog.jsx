import React from "react";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://ca-central-1.cdn.hygraph.com/content/clg3x6kr61rd901t3ej26d2k2/master",
  {
    headers: {
      authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
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

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export const Blog = ({ posts }) => {
  return (
    <div className="m-auto ml-24 w-full text-5xl text-white">
      Under Construction
    </div>
  );
};
