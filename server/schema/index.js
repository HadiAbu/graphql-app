import dummyData from "../data/dummyData.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql

    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id: ID!
        rating: String!
        content: String!
        game: Game!
        author: Author!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    # This is not optional, very graphql query needs this
    # to define entry point to the graph and specifiy the return types of these entry points 
    type Query{
        reviews: [Review]
        # demonstrating how to use parameters in graphQL
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation{
      deleteGame(id: ID!): [Game]
    }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
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
  Game: {
    reviews(parent) {
      return dummyData.reviews.filter((rev) => rev.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return dummyData.reviews.filter((rev) => rev.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return dummyData.authors.find((auth) => auth.id === parent.author_id);
    },
    game(parent) {
      return dummyData.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      dummyData.games = dummyData.games.filter((game) => game.id !== args.id);
      return dummyData.games;
    },
  },
};
