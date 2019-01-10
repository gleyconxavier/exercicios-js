// class - sofre por usar this ao mudar de escopo.
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    talk() {
        console.log(`${this.name} barks violently at you! Au! au! au!`)
    }

    hit(){
        console.log(`${this.name} bites your ankle! ${this.age} damage!`)
    }
}

const dog = new Animal('Biscoitão!', 2)
dog.talk()
dog.hit()

const p1 = new Pessoa('João')
p1.falar()

// factory - se mantem mesmo com a mudança de escopo
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()
