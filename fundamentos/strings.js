const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //chamar e retornar valor unicode/ascii
console.log(escola.indexOf('3')) //retorna o índice dado determinado valor


// substring busca dentro de uma string, carácteres entre determinados índices
console.log(escola.substring(1)) //vai do índice(1) até o final.
console.log(escola.substring(0, 3)) //vai do índice(0) até o índice(3).

console.log('Escola '.concat(escola).concat("!")) // estranhamente a forma de concatenar em JavaScript.
console.log('Escola '+ escola + "!") //alternativa ao .concat
console.log(escola.replace(3, 'e')) //replace pega um indíce e modifica o valor. existem expressões regulares"regex" que podem ser utilizadas aqui ex. '/\w/g'

console.log('Ana,Maria,Pedro'.split(',')) // split também pode usar regex ex. '/,/'
console.log(escola.replace(/\w/g, 'e')) // exemplo de regex, mudando todos caracteres da string para 'e'

console.log('novo teste 2')