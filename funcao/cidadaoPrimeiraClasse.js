// Função em JavaScript é First-Class Object (Citizens)
// Higher-Order Function

/* básicamente toda função em JS, retorna
   'Undefined', caso não seja atribuído um 'return'.
*/

/* funcoes sao tratados e armazenadas como qualquer outro dado,
   podem ser atribuídas como dados a váriaveis e arrays.
*/

// criar de forma literal
function fun1() {}

// Armazenar em uma váriavel

const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar uma função como parametro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        return function(d){
            return function(e){
                console.log(a+b+c+d+e)
            }
        }
    }
}

soma(2, 3)(4)(10)(17)
const soma2 = soma(2,3) // exemplo repassando para uma constante
soma2(4)(10)(17) // execucao chamando a constante e atribuindo o restante dos parametros
