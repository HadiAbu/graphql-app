// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql

    type Game{
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review{
        id: ID!
        rating: String!
        content: String!
    }
    type Author{
        id: ID!
        name: String!
        verified: Boolean!
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
`;
