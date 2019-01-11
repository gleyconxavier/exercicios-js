console.log(this === global) // isto é falso, this dentro de um modulo node aponta para module.exports.
console.log(this === module) // falso this é um objeto que é exatamente a referência de module.exports

console.log(this === module.exports) // verdadeiro pois this é referência de module.exports
console.log(this === exports) // verdadeiro os dois são referência do mesmo objeto.

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    
    this.perigo = 'Viado encontrado'
}

logThis() // dentro de uma função this não aponta para module.exports, this aponta para global