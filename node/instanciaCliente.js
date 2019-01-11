const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
 
// necessario o () para retornar já invocando a factory assim criando o objeto
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)