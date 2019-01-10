function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const carro = {preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// call e apply servem para aplicar ou chamar uma função sobre um determinado objeto.

// diferenças
console.log(getPreco.call(carro, 0.17, '$'))
// call é passado diretamente cada um dos parametros que serão passados para a função.
// o primeiro sempre é o contexto no caso 'carro' o resto são os parâmetros.

console.log(getPreco.apply(carro, [0.17, '$']))
// no apply já é passado o contexto e em seguido um array com os/como parâmetro.