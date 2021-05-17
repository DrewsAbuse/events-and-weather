import { gql } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})
class QueryGraphql {
  async registrationQgl(username, password) {
    return await client
      .mutate({
        mutation: gql` 
        mutation {
          registrationUser(input: { username: ${JSON.stringify(username)}, password: ${JSON.stringify(password)} }) {
            message
            
            
          }
        }
  `,
      })
      .then((result) => {
        console.log(result, 'QL ERGGGG')
        return result
      })
  }
  async loginGql(username, password) {
    return await client
      .mutate({
        mutation: gql`
        mutation {
          loginUser(input: { username: ${JSON.stringify(username)}, password: ${JSON.stringify(password)} }) {
            message
            id
            token
          }
        }
      `,
      })
      .then((result) => {
        console.log(result, 'QL RES')
        return result
      })
  }
  async fetchNotesAPI(User) {
    try {
      return await client
        .query({
          query: gql`
            query {
              notesById(id: ${JSON.stringify(User._id)}) {
                message
                notes{
                id
                title
                event_date
                region
                description
                user_id
                is_complete
                }
               
              }
            }
          `,
        })
        .then((result) => result)
    } catch (error) {
      console.log(error)
    }
  }
  async deleteNotesGql(note_id, User) {
    return await client
      .mutate({
        mutation: gql`
          mutation {
            deleteNote(note_id: ${note_id}, user_id: ${JSON.stringify(User._id)}) {
              message
            }
          }
        `,
      })
      .then((result) => {
        console.log(result, 'QL RES')
        return result
      })
  }
  async addNote(note) {
    console.log(note)
    return await client
      .mutate({
        mutation: gql`
          mutation {
            addNote(input: note) {
              id
            }
          }
        `,
      })
      .then((result) => {
        console.log(result, 'QL RES')
        return result
      })
  }
}
const queryGraphql = new QueryGraphql()

export { queryGraphql }
