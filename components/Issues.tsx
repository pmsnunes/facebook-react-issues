import { useQuery, gql } from "@apollo/client";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const QUERY = gql`
  query Issues {
    search(first: 10, type: ISSUE, query: "repo:facebook/react state:open") {
      issueCount
      pageInfo {
        hasNextPage
        endCursor
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
          ... on PullRequest {
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

const Issues = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2 className="mt-10">Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2 className="mt-10">Error loading data</h2>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <div className="overflow-x-auto mt-10">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <TableHead />
          <tbody className="text-gray-600 text-sm font-light">
            {data.search.edges.map((edge: any) => (
              <TableRow
                createdAt={edge.node.createdAt}
                title={edge.node.title}
                author={edge.node.author}
                state={edge.node.state}
                url={edge.node.url}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Issues;
