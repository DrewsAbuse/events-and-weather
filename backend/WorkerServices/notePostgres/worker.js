const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const noteRouter = require('./Routers/noteRouter')
const userRouter = require('./Routers/userRouter')

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/notes', noteRouter)
app.listen(port, () => console.log(`Example app listening on port!${port}  Pid - ${process.pid}`))
