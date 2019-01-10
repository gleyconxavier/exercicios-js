// Reduce criada junto adivinhando o instrutor

Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true },
     { nome: 'Maria', nota: 9.2, bolsista: true }
]

let res = 0

alunos.map(e => e.bolsista).reduce2(function(acumulador, atual) {
    if( atual == true || acumulador == true ) {
        res++   
    } if ( acumulador && atual == true) {
        res++
    }
})

function result () {
    if (res == alunos.length) {
        return console.log('Todos são bolsistas!')
    } else {
        return console.log(`Apenas ${res} alunos são Bolsistas.`)
    }
}

result()

//exemplinho da aula

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma,21))