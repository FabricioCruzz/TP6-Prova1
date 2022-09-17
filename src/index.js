const express = require('express')
const PORT = 8087
const router = require('./router/movies.router')

const app = express()
app.use(express.json())
app.use('/api/movies', router)


app.listen(PORT, () => console.log(`server up on PORT ${PORT}`))