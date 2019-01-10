const valores = [7.7, 8.9, 6.3, 9.2]

console.log (valores[0], valores [3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // chamar quantidade de elementos no array.

valores.push({id: 3}, false, null, 'teste') //adiciona diversos elementos de vários tipos, ao array

/* 
LEMBRETE: Embora seja possível utilizar diversos tipos de elementos no array, 
não é uma boa prática utilizar diversso tipos em um único array.
Um prática melhor e torna-los homogêneos ou seja um array para tratar 
de clientes, outros de produtos e etc.
*/

console.log(valores)

console.log(valores.pop()) //pega o último valor do array, e retorna removendo-o do array.
console.log(valores)
delete valores[0] // outra forma de remover um elemento, utilizando um índice.
console.log(valores)

console.log(typeof valores)
// Bolsonaro17!