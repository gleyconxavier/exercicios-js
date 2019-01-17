const fs = require('fs') // requerindo modulo filesystem, um dos modulos default do node.

const caminho = __dirname + '/arquivo.json'

/* Deve tomar cuidado com a questão do event loop
   sincrono fará com que ele pare e atue como uma "fila"
   enquanto assíncrono será possível que salte o processo que está demorando
   e continue
*/

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono

fs.readFile(caminho,'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

// exemplo do que pode ser feito com isto

 /*
fs.readdir(__dirname, (err, arquivos) => {
    const v = a => a == 'exportar.js'
    console.log(arquivos.filter(v))
})
*/