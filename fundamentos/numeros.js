const peso1 = 1.0
const peso2 = Number('2.0') // chama função Number passando a string para valor númerico.

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //chama funcao number e pergunta atraves do metodo isInterger se inteiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //converte em binário
console.log(typeof media)
console.log(typeof Number)