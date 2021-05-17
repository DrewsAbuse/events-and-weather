const { gql } = require('apollo-server')
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  input NoteInput {
    title: String
    region: String
    event_date: String
    description: String
    is_complete: Boolean
    user_id: String
  }
  type Note {
    id: Int
    title: String
    region: String
    event_date: String
    description: String
    is_complete: Boolean
    user_id: String
    created_at: String
    updated_at: String
  }

  type User {
    message: String
    id: String
    token: String
  }
  type Message {
    message: String
  }
  type Notes {
    message: String
    notes: [Note!]
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
    deleteNote(note_id: Int, user_id: String): Message
    addNote(input: NoteInput): Note
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    notesById(id: String): Notes
  }
`
module.exports = { typeDefs }
