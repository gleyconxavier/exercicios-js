let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // usando Not para negar duas vezes, e retornar um Boolean.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!!1.2)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo= true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // isto '||' representa o OU

let nome = ''

console.log(nome || 'Desconhecido')

nome = 'Cyberahou'

console.log(nome || 'Desconhecido')

/* 
vários tipos em JavaScript podem ser resolvidos,
para valores booleanos, logo é possível se aproveitar disto.
para realizar lógicas como as feitas acima.
*/
