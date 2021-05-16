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
}
const queryGraphql = new QueryGraphql()

export { queryGraphql }
