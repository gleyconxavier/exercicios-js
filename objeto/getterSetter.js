// 

const sequencia = {
    _valor: 1,  // convenção, está é uma variável que está pretendida ser acessada apenas dentro do objeto.
    get valor() {return this._valor++ },
    set valor(valor) {
        if(valor>this._valor) {
            this._valor = valor
        } 
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor) // acessando a partir do get/set.
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // mostrando que está chamando a função internamente.
sequencia.valor = 900 
console.log(sequencia.valor, sequencia.valor) // ao tentar passar um valor menor, automaticamente o set passa para o if faz ignorar.
