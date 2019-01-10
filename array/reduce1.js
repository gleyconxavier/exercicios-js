// reduce recebe dois parametros um que vai acumulando de acordo com as condições passadas e o outro que será o 'adicional' e o resultado sempre retornando ao acumulador gerando assim um resultado final reduzido.
// callback - função que é executada em cada valor do array, recebe até quatro elementos.
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)