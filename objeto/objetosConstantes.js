// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'

// pessoa -> 456 -> {....}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
// objetos congelados são imutáveis - torna o objeto constante.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)