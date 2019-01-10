const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
/* 
operador ternário é a parte "nota >= 7 ? 'Aprovado' : 'Reprovado'"
sendo nota >= 7 a primeira operação, "?" a segunda que diz SE, e ":" que diz SENAO
*/

console.log(resultado(7.1))
console.log(resultado(5))
console.log(resultado(6.9))
