const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true })) // se vier resultado de formulario
app.use(bodyParser.json()) // se vier json

const multer = require('multer') // interpretar formulario que veio do arquivo de upload

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('./upload'), (req, res) => {
    upload(req, res, err => {
        if(err) {
            return  res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
}

app.post('/formulario', (req, resp) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 == 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))