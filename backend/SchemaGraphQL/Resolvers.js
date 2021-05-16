const AuthService = 'http://localhost:1337'
const authentication = require('../Controller/Auth')

const fetch = require('node-fetch')

const resolvers = {
  Mutation: {
    registrationUser: async (_, { input }) => {
      console.log(JSON.stringify(input))
      const { id, message } = await authentication.registrationUser(input)
      return id ? { id, message } : { message }
    },
    loginUser: async (_, { input }) => {
      console.log(JSON.stringify(input), 'resolver')
      const { id, message, token } = await authentication.loginUser(input)
      return id ? { id, message, token } : { message }
    },
  },
  Query: {
    books: () => books,
  },
}
module.exports = { resolvers }
