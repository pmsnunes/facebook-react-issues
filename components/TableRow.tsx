import moment from "moment";

interface TableRowProps {
  createdAt: string;
  title: string;
  state: string;
  author: any;
  url: string;
}

const TableRow = ({ createdAt, title, state, author, url }: TableRowProps) => {
  let createdAtDisplay: string = moment(createdAt).fromNow();

  return (
    <tr  className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{createdAtDisplay}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{title}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-start">
          <div className="mr-2">
            <img className="w-6 h-6 rounded-full" src={author.avatarUrl} />
          </div>
          <a
            href={author.url}
            target="_blank"
            className="transform hover:text-purple-500 hover:scale-110"
          >
            {author.login}
          </a>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
          {state}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <a
            href={url}
            target="_blank"
            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
