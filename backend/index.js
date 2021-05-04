const express = require('express')
const { fork } = require('child_process')
const cors = require('cors')
const app = express()

const port = 5000
const notesRouter = require('./Router/notesRouter')

const authentication = require('./Controller/Auth')
app.use(cors())
app.use(express.json())
app.post('/reg', authentication.registrationUser)
app.post('/login', authentication.loginUser)
app.use('/notes', notesRouter)
const AuthMongo = fork('./WorkerServices/authMongo/worker.js')
const AuthJwt = fork('./WorkerServices/authJwt/worker.js')
const NoteLits = fork('./WorkerServices/notePostgres/worker.js')
app.listen(port, () => console.log(`Example app listening on port port!${port}  Pid - ${process.pid} `))
