interface PaginationProps {
  onPreviousPage: Function;
  onNextPage: Function;
  pageInfo: any;
  totalCount: number;
}

const TablePagination = ({
  onPreviousPage,
  onNextPage,
  pageInfo,
  totalCount,
}: PaginationProps) => {
  let disabledButtonClassname = "bg-gray-200 w-20 text-gray-600 p-2 rounded";
  let enabledButtonClassname =
    "bg-blue-600 w-20 transition hover:bg-purple-500 text-white p-2 rounded";

  return (
    <div className="flex justify-between align-middle w-full h-full p-2">
      <div className="mt-2 text-gray-600">
        Total issues: <span className="mt-2 text-blue-600 font-bold">{totalCount}</span>{" "}
      </div>
      <div>
        <button
          onClick={() => onPreviousPage(pageInfo)}
          className={
            (pageInfo.hasPreviousPage
              ? enabledButtonClassname
              : disabledButtonClassname) + " mr-2"
          }
        >
          Previous
        </button>
        <button
          onClick={() => onNextPage(pageInfo)}
          className={
            pageInfo.hasNextPage
              ? enabledButtonClassname
              : disabledButtonClassname
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
