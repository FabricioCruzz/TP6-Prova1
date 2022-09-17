const express = require('express')
const PORT = 8087
const router = require('./router/movies.router')
var jwt = require('jsonwebtoken')


const app = express()
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json());

app.use(express.json())
app.use('/api/movies', router)

function verifyJWT(req, res, next){ 
    var token = req.headers['x-api-key']; 
    if (!token){
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
        next(); 
    }
}    

// app.use('/api/movies', (req, res) => { 
//     console.log(JSON.stringify(req.headers['x-api-key']))
    
//     if(req.headers['x-api-key'] === "Un1v4$.2022"){ 
//         //Passei, posso acessar as rotas
//         console.log(`Entrei no if`)
//         app.use('/api/movies', router)
        
//     }
    
//     res.status(401).send('Deu ruim'); 
// }) 


app.listen(PORT, () => console.log(`server up on PORT ${PORT}`))