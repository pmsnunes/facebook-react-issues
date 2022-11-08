import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`
    },
    cache: new InMemoryCache(),
});

export default client;