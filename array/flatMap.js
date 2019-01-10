// conteúdo extra

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota // função que pega nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // função que recebe notas da turma inteira.

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

/* FlatMap nada mais é que um map passado junto a um concat,
   ou seja um map que concatena os resultados em um único array */
//exemplo
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))


// criando flatmap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback)) 
    // pega o resultado do map e passa para o concat resultando no flatmap.
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)