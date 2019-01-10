const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true },
     { nome: 'Maria', nota: 9.2, bolsista: true }
]

// Desafio 1: Todos os alunos são Bolsistas?
// Desafio 2: Algum aluno é Bolsista?

let res = 0



alunos.map(e => e.bolsista).reduce(function(acumulador, atual) {
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

// Solução do professor

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio 2

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))