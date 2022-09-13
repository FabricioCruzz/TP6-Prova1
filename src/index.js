const express = require('express')
const PORT = 8087
const router = require('./router/prova.router')

const app = express()
app.use(express.json())
app.use('/', router)


app.listen(PORT, () => console.log(`server up on PORT ${PORT}`))