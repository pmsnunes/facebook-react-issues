import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import TableHead from "./TableHead";
import TablePagination from "./TablePagination";
import TableRow from "./TableRow";

const QUERY = gql`
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

interface CursorPagination {
  before: String | null,
  after: String | null,
  first: number | null,
  last: number | null,
}

const Issues = () => {
  const [cursor, setCursor] = useState<CursorPagination>({
    before: null,
    after: null,
    first: 10,
    last: null
  });


  const { data, loading, error } = useQuery(QUERY, {
    variables: { before: cursor.before, after: cursor.after, first: cursor.first, last: cursor.last },
  });

  if (loading) {
    return <h2 className="mt-10">Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2 className="mt-10">Error loading data</h2>;
  }

  const onPreviousPage = (pageInfo: any) => {
    setCursor({
      before: pageInfo.startCursor,
      after: null,
      first: null,
      last: 10,
    });
  };

  const onNextPage = (pageInfo: any) => {
    setCursor({
      before: null,
      after: pageInfo.endCursor,
      first: 10,
      last: null
    });
  };


  return (
    <div className="overflow-x-auto mt-10">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <TableHead />
          <tbody className="text-gray-600 text-sm font-light">
            {data.search.edges.map((edge: any) => (
              <TableRow
                key={edge.node.createdAt}
                createdAt={edge.node.createdAt}
                title={edge.node.title}
                author={edge.node.author}
                state={edge.node.state}
                url={edge.node.url}
              />
            ))}
          </tbody>
        </table>
        <TablePagination
          key={data.search.pageInfo.endCursor}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          pageInfo={data.search.pageInfo}
          totalCount={data.search.issueCount}
        />
        <div />
      </div>
    </div>
  );
};

export default Issues;
