const express = require('express')
const mongoose = require('mongoose')
const { secret } = require('./secretLinks')
const app = express()
const port = process.env.PORT || 1337
const authRouter = require('./authRouter')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const { Worker, isMainThread } = require('worker_threads')

app.use(cors({ origin: 'http://localhost:3000', exposedHeaders: ['X-Powered-By', 'Set-Cookie'] }))
app.use(cookieParser())
app.use(express.json())

app.use('/auth', authRouter)
const ServerStart = async () => {
  try {
    await mongoose.connect(secret, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(port, () => console.log(`Example app listening on port!${port}  Pid - ${process.pid}`))
  } catch (e) {
    console.log(e)
  }
}

ServerStart()
