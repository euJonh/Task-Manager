const express = require('express')
const path = require('node:path')
const router = require('./routes')
const app = express()

//configuração do EJS
app.set('view engine', 'ejs')  
app.set('views', path.join(__dirname, 'views'))

//Configuração par ler dados da requisição
app.use(express.urlencoded({extended: true}))

//Rotas da apllicação
app.use(router)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor iniciado\nRodando em http://localhost:${port}`))