const { gql } = require('apollo-server')
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type User {
    message: String
    id: String
    token: String
  }
  type Message {
    message: String
  }
  input regUserInput {
    username: String
    password: String
  }
  input logingUserInput {
    username: String
    password: String
  }
  type Mutation {
    loginUser(input: logingUserInput): User
    registrationUser(input: regUserInput): Message
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`
module.exports = { typeDefs }
