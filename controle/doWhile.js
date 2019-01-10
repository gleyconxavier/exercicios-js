function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// raramente se depara com uma estrutura como esta. E executada ao menos uma vez.
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a próxima!')