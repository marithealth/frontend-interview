import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { jobResolvers } from "./resolvers/jobResolvers";
import { salaryResolvers } from "./resolvers/salaryResolvers";

const typeDefs = `
  type Job {
    id: ID!
    title: String!
    hospital: String!
    location: String!
    salary: Int!
    specialty: String!
    description: String!
  }

  type SalaryEstimate {
    specialty: String!
    minSalary: Int!
    maxSalary: Int!
    averageSalary: Int!
    percentile25: Int!
    percentile75: Int!
  }

  type Query {
    jobs(specialty: String, location: String): [Job!]!
    salaryEstimate(specialty: String!, experience: Int!, location: String!): SalaryEstimate!
  }
`;

const resolvers = {
  Query: {
    ...jobResolvers.Query,
    ...salaryResolvers.Query,
  },
};

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.APOLLO_PORT || 4000;

  await new Promise((resolve) =>
    httpServer.listen({ port: PORT }, () => resolve(undefined))
  );

  console.log(
    `🚀 Apollo Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `📊 GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`
  );

  return { server, app };
}

if (require.main === module) {
  startApolloServer().catch((error) => {
    console.error("Error starting Apollo Server:", error);
    process.exit(1);
  });
}

export { startApolloServer };
