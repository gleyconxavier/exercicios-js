const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// testes
console.log(ferrari.__proto__) // acessando quem e o prototipo desse objeto.
console.log(ferrari.__proto__ === Object.prototype) // verificando se ele aponta para Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // verificando se existe um prototipo maior que Object.prototype

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)