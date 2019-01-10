/*
A maior diferença entre os Construtores e os Factorys além do operador new, 
é que os Factorys retornam um objeto, enquanto os Constructors não. Vamos a um exemplo:
*/

//Fábrica
function PessoaFactory(nome){
    var obj = new Object();
    obj.nome = nome;
    return obj;
};

//Construtor
function PessoaConstructor(nome){
    this.nome = nome;
};

//O fábrica cria um novo objeto, seta seus atributos e o retorna. Poderia usa-la dessa forma:

let pessoa1 = PessoaFactory('Pedro');
console.log(pessoa.nome) //Pedro

// Já a função Construtora trabalha de uma forma diferente:

let pessoa2 = new PessoaConstructor('Maria');
console.log(pessoa2.nome); //Maria

// Até ai, quase a mesma sintaxe da função Factory, mas quando usamos o operador new, por debaixo dos panos, é criado um novo objeto vazio e depois feita uma chamada para a função call passando o objeto que acabou de ser criado como contexto:

// Quando você usa essa sintaxe:

let pessoa2 = new PessoaConstructor('Maria');
console.log(pessoa2.nome); //Maria
//Por debaixo dos panos acontece isso:

let pessoa2 = {}
PessoaConstructor.call(pessoa2, 'Maria');
console.log(pessoa2.nome); //Maria

// A funcão PessoaConstructor é executada no contexto do objeto pessoa2, 
// isso faz com que o this.nome dentro da função construtora passe a ser 
// um atributo do objeto pessoa2, que recebe o parâmetro passado para a função construtora;