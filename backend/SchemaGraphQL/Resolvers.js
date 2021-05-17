const AuthService = 'http://localhost:1337'
const authentication = require('../Controller/Auth')
const notesController = require('../Controller/Notes')
const fetch = require('node-fetch')

const resolvers = {
  Mutation: {
    addNote: async (_, { input }) => {
      const { message, note } = await notesController.createNote({ ...input })
      return { ...note }
    },
    deleteNote: async (_, { note_id }) => {
      const message = await notesController.deleteNote(note_id)
      return message
    },
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
    notesById: async (_, { id }, context) => {
      console.log(id, 'query NOTES', context.DecryptedJwt)
      const res = await notesController.fetchNoteByUser(id)

      return { ...res }
    },
  },
}
module.exports = { resolvers }
