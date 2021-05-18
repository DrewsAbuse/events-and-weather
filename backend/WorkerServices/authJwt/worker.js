const express = require('express')
const cors = require('cors')
const app = express()
const port = 3080
const { verify, create } = require('./Token')

app.use(express.json())
app.use(cors())
app.get('/verify', verify)
app.post('/create', create)

app.listen(port, () => console.log(`Example app listening on port port!${port}  Pid - ${process.pid}`))
