/*
 funcões são prácticamente trechos de códigos,
 ou bloco de códigos, nomeado.
 recebe ou não parametros, pode ou não retornar dados.
 pode receber dados ou não dados. Enfim.
*/

//função sem retorno

function imprimirSoma (a,b) {
    console.log(a + b)
}

imprimirSoma(10,20)
imprimirSoma(10) 
/* JavaScript aceita uma situação de 1 parametro como esta.
porém, retorna NaN devido (10 + undefined), por valor b não possuir dados.
*/


// função com retorno

function soma (a, b = 1) { // possível passar valor como default"b=1" no caso.
    return a + b
}

console.log(soma(4,13))

function soma0 (a, b, c = 10) {
    return a + b * c 
}

console.log(soma0(2500,350)) // JS exectou primeiramente a multiplicacao 350 * 10 entao 3500 + 2500