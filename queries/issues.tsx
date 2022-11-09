import { gql } from "@apollo/client";

const IssuesQuery = gql`
  query Issues($before: String, $after: String, $first: Int, $last: Int) {
    search(
      first: $first
      last: $last
      before: $before
      after: $after
      type: ISSUE
      query: "repo:facebook/react state:open is:issue"
    ) {
      issueCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Issue {
            createdAt
            title
            url
            state
            author {
              avatarUrl
              url
              login
            }
          }
        }
      }
    }
  }
`;

export {IssuesQuery}