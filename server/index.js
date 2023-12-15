import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/index.js";
import { dummyData } from "./data/dummyData.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    reviews: () => dummyData.reviews,
    review: (_, args) => {
      return dummyData.reviews.find((rev) => rev.id === args.id);
    },
    authors: () => dummyData.authors,
    author: (_, args) =>
      dummyData.authors.find((author) => author.id === args.id),
    games: () => dummyData.games,
    game: (_, args) => dummyData.games.find((game) => game.id === args.id),
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
