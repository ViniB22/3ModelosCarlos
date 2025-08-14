const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT2
const hostname = process.env.DB_HOST

const produtoController = require('./controller/produtoController.controller')
const usuarioController = require('./controller/usuarioController.controller')
const compraController = require('./controller/compraController.controller')
const conn = require('./db/conn')

// MiddleWare
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// ----------

app.get('/produto/grafico',produtoController.grafico)
app.post('/produto',produtoController.cadastrar)
app.get('/produto',produtoController.listar)
app.get('/produto/:nome',produtoController.procurarNome)
app.delete('/produto/:id',produtoController.apagar)
app.put('/produto/:id',produtoController.atualizar)

app.get('/usuario/grafico',usuarioController.grafico)
app.post('/usuario',usuarioController.cadastrar)
app.get('/usuario',usuarioController.listar)
app.get('/usuario/:id',usuarioController.procurarId)
app.delete('/usuario/:id',usuarioController.apagar)
app.put('/usuario/:id',usuarioController.atualizar)

app.post('/compra',compraController.cadastrar)
app.get('/compra',compraController.listar)
app.delete('/compra/:id',compraController.apagar)
app.put('/compra/:id',compraController.atualizar)

app.get('/', (req,res)=>{
    res.status(200).json({message:'Aplicação rodando!'})
})

// ------------

conn.sync()
.then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Aplicação rodando em http://${hostname}:${PORT}`)
    })
})

.catch((err)=>{
    console.error('Deu erro ao tentar rodar o servidor',err)
})