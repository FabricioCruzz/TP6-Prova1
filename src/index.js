const express = require('express')
const PORT = 8087
const router = require('./router/movies.router')

const app = express()

app.use(express.json())
app.use('/api/movies', verifyJWT, router)

function verifyJWT(req, res, next){ 
    var token = req.headers['x-api-key']; 
    if (!token){
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    }
    return res.status(200).send({ auth: true, message: 'Token ok.' }); 
}


app.listen(PORT, () => console.log(`server up on PORT ${PORT}`))