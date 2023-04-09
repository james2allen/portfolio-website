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

const BLOG_LIST_QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      blurb
      altText
      coverPhoto {
        url
      }
    }
  }
`;

const BLOG_DETAILS_QUERY = gql`
  {
    query getPost($slug: string){
        posts {
            id
            title
            datePublished
            slug
            content
            altText
            coverPhoto {
                url
            }
        }
    }
  }
`;

export function useGetBlogPosts() {
  return useQuery("get-posts", async () => {
    const response = await graphcms.request(BLOG_LIST_QUERY);
    return response;
  });
}

export function useGetBlogPost(variables) {
  return useQuery("get-post", async () => {
    const response = await graphcms.request(BLOG_DETAILS_QUERY, variables);
    return response;
  });
}
