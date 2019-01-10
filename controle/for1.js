let contador = 1

while(contador <= 10) {
    console.log(`Contador: ${contador}`)
    contador++ // operador unário para acrescentar
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

// percorrendo array.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (i = 0; i < notas.length; i++) {
    console.log(`Notas = ${notas[i]}`)
}