const prod1 = {}    /*
                    criar objeto, objetos possuem relação chave/valor
                    sendo chave não somente numeral como no array.
                    */
prod1.nome = 'Celular Ultra Mega' // criando uma chave nome de valor string 'Celular Ultra Mega'
prod1.preco = 4998.90 // o mesmo porém com numeral
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

prod2['Desconto Legal'] = 0.40 // evitar espaços
console.log(prod2)