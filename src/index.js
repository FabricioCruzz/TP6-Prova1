const express = require('express')
const PORT = 8087
const swaggerUi = require('swagger-ui-express')
const router = require('./router/movies.router')
const auth = require('./middleware/auth')
const swaggerJson = require('../documentation/openapi.json')

const app = express()

app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerJson))
app.use(auth.authentication)
app.use('/api/movies', router)


app.listen(PORT, () => console.log(`server up on PORT ${PORT}`))