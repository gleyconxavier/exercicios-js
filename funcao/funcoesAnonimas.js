const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

// na ultima chamada, passou se uma outra funcao dentro da imprimir resultado 

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()

// funcao anonima passada como dado de uma chave em um objeto.
console.log(typeof(pessoa)) 