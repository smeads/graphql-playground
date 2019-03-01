import { GraphQLServer } from "graphql-yoga";

/* Type definitions (schema) */
const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    isEmployed: Boolean!
    gpa: Float!
  }
`;

/* Resolvers */
const resolvers = {
  Query: {
    id() {
      return "absdaedsdf";
    },
    name() {
      return "Steve";
    },
    age() {
      return 30;
    },
    isEmployed() {
      return true;
    },
    gpa() {
      return 3.89;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("GraphQL server is running...");
});
