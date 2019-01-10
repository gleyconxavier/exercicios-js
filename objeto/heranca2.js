// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não faça isso em casa
const avo = {attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' } 
// esse atributo 3 'sombreou' o atributo 3 que estava acima na cadeia de herança, no caso o atributo 3 do pai.

console.log(filho.attr1, filho.attr0, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h, corre berg!`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing = sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super serve no caso para chamar metodo do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())