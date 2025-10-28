"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Local Apollo Server
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
