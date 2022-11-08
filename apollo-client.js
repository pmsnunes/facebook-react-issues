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