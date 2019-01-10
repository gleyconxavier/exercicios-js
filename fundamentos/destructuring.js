// operador de desestruturação. recurso novo do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        cep: 76940000
    }
}

const {nome, idade} = pessoa // tire nome e idade do objeto pessoa.
console.log(nome, idade)

const{nome: n, idade: i} = pessoa //tire nome e idade do objeto pessoa e salve nas variaveis n e i.
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)