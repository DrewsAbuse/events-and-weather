const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { fork } = require('child_process')
const AuthMiddelware = require('./middleware/AuthMiddelware')
const cors = require('cors')
const notesRouter = require('./Router/notesRouter')
const authentication = require('./Controller/Auth')
const { typeDefs } = require('./SchemaGraphQL/TypeDefs')
const { resolvers } = require('./SchemaGraphQL/Resolvers')
const port = 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(AuthMiddelware)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    DecryptedJwt: req.user,
  }),
})
server.applyMiddleware({ app })

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: ' + add)
})

app.post('/reg', authentication.registrationUser)
app.post('/login', authentication.loginUser)
app.use('/notes', notesRouter)
const AuthMongo = fork('./WorkerServices/authMongo/worker.js')
const AuthJwt = fork('./WorkerServices/authJwt/worker.js')
const NoteLits = fork('./WorkerServices/notePostgres/worker.js')
app.listen(port, () => console.log(`Example app listening on port port!${port}  Pid - ${process.pid} `))
