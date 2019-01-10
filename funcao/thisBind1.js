const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e OO

/* 
O this 'saltou' de escopo para fora da função.
agindo em outro contexto, provavel global.
Assim sendo retorno de um objeto no qual .falar() é indefinido.
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
// bind fixa o local do this a um determinado parametro, definindo a sim o escopo do this.
falarDePessoa()