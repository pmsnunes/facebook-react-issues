import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    },
    cache: new InMemoryCache(),
});

export default client;