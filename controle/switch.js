/*
    Switch diferente de outros laços condicionais, retorna um numeral e não
    um valor Booleano (verdadeiro ou falso).
*/

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        // se for 10 ou 9. executa linha 6.
        case 10: // como está vazio switch olha a linha abaixo.
        case 9:
            console.log('Quadro de honra.')
            break //switch só sai se determinar um break.
        case 8: case 7: {
            console.log('Aprovado')
            break
        } // mostrando que é possivel usar chaves. Mas ninguém usa.
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3:  case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida.') 
        //default não é necessário que esteja no final, porém, caso usado em outro local se faz necessário o uso de "break".
    }
}

imprimirResultado(10)
imprimirResultado('Teste')
imprimirResultado(3)
imprimirResultado(6.55)
imprimirResultado(-1)