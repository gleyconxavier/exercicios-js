function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

/*
independente que seja uma variável, uma expressão, ou qualquer outra condição
como no caso 'valor', JavaScript irá transformar isto em 'true' ou 'false'.
Como condição para executar o bloco de código dentro da condição 'if'(SE).
*/

// testando retornas se são true/false.
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([2, 12])
seForVerdadeEuFalo({})

// ele converte todos para false ou true.