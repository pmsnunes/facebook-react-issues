import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>React Issues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a
            className="text-blue-600"
            href="https://github.com/facebook/react"
            target="_blank"
          >
            React project Issues
          </a>{" "}
          Dashboard
        </h1>

        <div className="overflow-x-auto mt-10">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Created at</th>
                  <th className="py-3 px-6 text-left">Title</th>
                  <th className="py-3 px-6 text-center">Author</th>
                  <th className="py-3 px-6 text-center">State</th>
                  <th className="py-3 px-6 text-center">View</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">10 hours ago</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img
                          className="w-6 h-6 rounded-full"
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                        />
                      </div>
                      <span>Eshal Rosas</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      <img
                        className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                      />
                      <img
                        className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                      />
                      <img
                        className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Made by{" "}
        <a href="https://pmsnunes.com" target="_blank">
          pmsnunes
        </a>
      </footer>
    </div>
  );
};

export default Home;
