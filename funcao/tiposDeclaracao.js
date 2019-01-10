console.log(soma(3, 4))
// funcoes declaradas por declaration podem ser chamadas antes da declaracao.
//console.log(mult(3, 4))
// para comparar chamando uma named function expression

// function declaration
function soma(x, y) {
    return x + y
}

// function expression - função anônima atrelada a uma variável no caso aqui constante.
const sub =  function (x,y){
    return x - y
}

console.log(sub(3, 4))

// named function expression - aqui já é uma mistura dos dois.
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))