import type { NextPage } from "next";
import Head from "next/head";
import Issues from "../components/Issues";

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
            className="text-blue-600 transform hover:text-purple-500"
            href="https://github.com/facebook/react"
            target="_blank"
          >
            React project Issues
          </a>{" "}
          Dashboard
        </h1>

        <Issues />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <span>Made by&nbsp;</span>
        <a
          className="text-blue-600 w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
          href="https://pmsnunes.com"
          target="_blank"
        >
          pmsnunes
        </a>
      </footer>
    </div>
  );
};

export default Home;
