// Armazenando uma funcao em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) // curiosidade JavaScript retorna numeros negativos Ex."-1".

/* Criou-se uma variavel constatne de com nome de subtracao
passou 2 parametros (a e b) utilizando arrow (=>) também pos uma
funcao no caso (a - b) para a variavel, quando a funcao e passada
desta maneira de sintaxe reduzida em uma linha de codigo, automaticamente
o resultado retorno por um "return". */

const imprimir2 = a => console.log(a)
imprimir2 ('Legal!!!')