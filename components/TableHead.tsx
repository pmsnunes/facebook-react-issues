const TableHead = () => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Created at</th>
        <th className="py-3 px-6 text-left">Title</th>
        <th className="py-3 px-6 text-left">Author</th>
        <th className="py-3 px-6 text-center">State</th>
        <th className="py-3 px-6 text-center">View</th>
      </tr>
    </thead>
  );
};

export default TableHead;
