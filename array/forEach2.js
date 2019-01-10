const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach( function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
})

// usando foreach para passar uma função callback que imprime no console o nome dos aprovados.
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)