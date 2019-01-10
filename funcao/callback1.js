const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))

// callback e o disparo de uma funcao atraves de um determinado evento
// neste caso o evento é o loop com foreach passando atráves das chaves do array, disparando a função.
// Procurar sobre o modelo OBSERVER