/* map serve para transformar um array em outro array, gera um array novo,
   convertendo e transformando seus dados, string, array, json e etc.
   porém a regra é que o array originado do array original de tamanho x,
   também terá o mesmo tamanho.
*/

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log('gerado:',resultado, 'original: ', nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) 
// chamou 3 maps, cada um passando o novo array para o próximo, que por sua vez passa a função designada e gera o novo array.
console.log(resultado)