import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/query";
import Mutation from "./resolvers/mutation";
import Subscription from "./resolvers/subscription";
import User from "./resolvers/user";
import Post from "./resolvers/post";
import Comment from "./resolvers/comment";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
  },
  context: {
    db,
    pubsub
  }
});

server.start(() => {
  console.log("The server is up!");
});
