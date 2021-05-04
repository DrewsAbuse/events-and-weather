const express = require('express')
const cors = require('cors')
const app = express()
const port = 3080
const tokenService = require('./Token/TokenService')

app.use(express.json())
app.use(cors())
app.get('/verify', tokenService.verify)
app.post('/create', tokenService.create)

app.listen(port, () => console.log(`Example app listening on port port!${port}  Pid - ${process.pid}`))
