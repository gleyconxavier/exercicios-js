// construtora vs factory

// factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}



const criarGato = bichano => {
    return {
        miar: () => console.log(`Meowww! ${bichano}`)
        // miar é uma chave do objeto, recebe a função anônima passada por arrow.
        // essa por sua vez chama a string template com a string passada.
    }
}

const miau1 = criarGato('Charlie')
miau1.miar()

const p2 = criarPessoa('João')
p2.falar()


// construtora
function Pessoa(nome) {
    this.nome = nome
    

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa('João')
p1.falar()