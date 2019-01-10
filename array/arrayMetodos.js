const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Massa quebrou o carro! remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona ao primeiro elemento da lista
console.log(pilotos)

// splice pode adicionar e remover elementos dentro de um array

pilotos.splice(2, 0, 'Bottas', 'Masa') // inicia no indice 2, irá remover ninguém e irá adicionar Bottas e Masa
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

// slice gera um novo array

const algunsPilotos1 = pilotos.slice(2) // pegando a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // indice 1 a indice 4
console.log(algunsPilotos2)

