const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log( total2 / alunos.length )

/* imperativo acaba por calcular declarar e fazer tudo ao mesmo tempo e tem pouca reutilidade
   é um passo-a-passo, já a forma declarativa é melhor entendida, usa mais os conceitos da
   linguagem sem ficar reinventando a roda e maior reutilização, provavelmente com isso maior
   produtividade. */