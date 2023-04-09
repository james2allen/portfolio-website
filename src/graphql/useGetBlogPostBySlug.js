import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://ca-central-1.cdn.hygraph.com/content/clg3x6kr61rd901t3ej26d2k2/master",
  {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
  }
);

const BLOG_DETAILS_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
      }
      altText
      coverPhoto {
        url
      }
    }
  }
`;

export function useGetBlogPostBySlug(variables) {
  return useQuery("get-post", async () => {
    const response = await graphcms.request(BLOG_DETAILS_QUERY, variables);
    return response;
  });
}
