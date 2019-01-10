function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final') 
// nao esta associado ao bloco IF, se perceber esta executando mesmo quando é 6 que é menor que 7
}

//teste1(6)
//teste1(8)

/*

 Nesse caso uso de chaves é opcional dentro de uma estrutura if,
 só que ele fica apenas com uma única sentença de código associado

 */

 function teste2(num) {
     if(num > 7 ); {
         console.log(num)
     }
 }

 teste2(6)
 teste2(8)

 /*
  Ou seja não use ';' em estruturas de controle
*/