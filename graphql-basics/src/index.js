import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/query";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query
  }
});

server.start(() => {
  console.log("GraphQL server is running...");
});
