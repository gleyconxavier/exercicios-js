console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // invés de retornar erro, retorna undefined.

aprovados[3] = 'Paulo' // adiciona/modifica um elemento em um determinado indice
aprovados.push('Abia') // adiciona um elemento no último lugar do array

console.log(aprovados.length)

aprovados[9] = 'Rafael' // adicionou ao indice 9 e os indices entre os que contém dados ate este ficaram com valor undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort() // alterou a ordem do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']

//aprovados.splice(1, 1 // começou a partir do indice do carlos, apagou carlos)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // outro exemplo apagando começando indice 1, elemento 2, e adicionando 2 strings
console.log(aprovados)
