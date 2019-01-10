let valor // não inicializada

console.log(valor)

valor=null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

/* 
 null e undefined se diferênciam pela relação com referência,
 no caso null é uma variável completamente nula, sem referência e valor.
 já no caso de undefined há uma referência na memo porém não há valor.
 */
