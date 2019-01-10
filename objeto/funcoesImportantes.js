const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // chamando todas as chaves/indices do objeto pessoa.
console.log(Object.values(pessoa)) // o mesmo porém com dados/valores do objeto pessoa.
console.log(Object.entries(pessoa)) // mistura os dois citados acima, um array externo composto de arrays com chave e valor.

/*Object.entries(pessoa).forEach(e => { // varrendo o array criado com .entries
    console.log(`${e[0]}: ${e[1]}`) 
}); */

Object.entries(pessoa).forEach(([chave, valor]) => { // removendo com destructuring.
    console.log(`${chave}: ${valor}`) 
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // o que fica é o último valor, caso duas chaves sejam iguais.

Object.freeze(obj) // congelou o objeto para não haver mudanças.
obj.c = 1234
console.log(obj)