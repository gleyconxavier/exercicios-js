const porta = 3003

const express = require('express')
const app = express()   // criou uma instância do express para trabalhar com o app.
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // converter para json (send faz isso)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
}) 

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON 
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`)
})