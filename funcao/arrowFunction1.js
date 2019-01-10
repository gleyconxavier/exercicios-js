// primeiro exemplo
let dobro = function (a) {
    return 2 * a
}


// exemplo com arrow, funcao arrow e sempre anonima
dobro = (a) => {
    return 2 * a
}

// exemplo 3, unica linha. return está ímplicito  
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro, mas pode ser ignorado.
console.log(ola())