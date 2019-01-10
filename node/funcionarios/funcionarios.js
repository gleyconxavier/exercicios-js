const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const xingLings = funcionarios.map(elemento => elemento.pais === 'China' & elemento.genero === 'F' ? elemento : '')
    const resultado = xingLings.filter(Boolean)
    const filtSal = resultado.reduce((func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual )
    console.log(filtSal)
})