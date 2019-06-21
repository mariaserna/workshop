const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String
    }

    type User {
        id: Int
        name: String!
        lastname: String
        email: String!
    }
 
    type Query {
      posts: [Post]
      users: [User]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 1,
        title: 'Mi titulo',
      }],
      users: () => [{
        id: 123,
        name: 'Antonia',
        lastname: 'Serna',
        email: 'anto@zemoga.com',
      },
      {
        id: 456,
        name: 'Orlando',
        lastname: 'Donado',
        email: 'orli@zemoga.com',
      },
      {
        id: 678,
        name: 'Hello',
        lastname: 'Lastname',
        email: 'anto@zemoga.com',
      }],
    },
  },
});

module.exports = schema;
