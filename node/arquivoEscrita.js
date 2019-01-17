const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    deconto: 0.15
}

/* 
  Escreve um arquivo de nome arquivoGerado.json
  contendo como conteúdo o objeto especificado no código acima.
  imprime uma confirmação caso ocorra tudo perfeitamente se não,
  joga um erro na tela.
*/

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})