/*
  O objetivo de se usar uma template string
  e de se adequar variaveis e/ou aritmeticos
  dentro de uma sentença de string
  Tambem suporta espaçamentos e quebras de linhas.
  Tambem suporta expressoes(arrow).
*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

// Template String
const template = `
    Olá
    ${nome}!`
console.log(template)

// expressões, são possíveis de usar em junção ao template string.

console.log(`1 + 1 = ${1 + 1}` )

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)