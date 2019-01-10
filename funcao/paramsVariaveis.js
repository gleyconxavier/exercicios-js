function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] // arguments é um array interno de toda função, onde estão todos os argumentos passados para a mesma
    }
    return soma
}

console.log(soma())
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'teste'))