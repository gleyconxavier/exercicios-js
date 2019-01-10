// testes comparativos
console.log(module.exports === this)
console.log(module.exports === exports)

// todos os 3 se referenciam ao mesmo objeto
this.a = 1
exports.b = 2
module.exports.c = 3

// mudando a referência para null
exports = null
console.log(module.exports)

// mudando a referência para um objeto
exports = {
    nome: 'Testes'
}

// Mesmo assim
console.log(module.exports)

// só e retornado o que está dentro de module.exports, caso queria usar um novo objeto
module.exports = { public: true }

// ou seja this e exports são apenas duas referências para o objeto que module.exports aponta